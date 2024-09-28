import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

const formSchema = z.object({
  firstName: z
    .string()
    .min(2, "O nome deve ter pelo menos 2 caracteres")
    .max(50, "O nome não pode exceder 50 caracteres"),
  lastName: z
    .string()
    .min(2, "O sobrenome deve ter pelo menos 2 caracteres")
    .max(50, "O sobrenome não pode exceder 50 caracteres"),
  email: z.string().email("Deve ser um e-mail válido"),
  phone: z.string().optional(),
  message: z
    .string()
    .min(10, "A mensagem deve ter pelo menos 10 caracteres")
    .max(500, "A mensagem não pode exceder 500 caracteres"),
});

export function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    fetch(import.meta.env.VITE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
      },
      body: JSON.stringify({
        Nome: values.firstName,
        Sobrenome: values.lastName,
        "E-mail": values.email,
        Telefone: values.phone,
        Mensagem: values.message,
      }),
    }).then((response) => {
      if (response.ok) {
        toast({
          title: "Mensagem enviada com sucesso!",
          description: (
            <p>
              Obrigado por entrar em contato! Responderemos o mais breve
              possível.
            </p>
          ),
        });
      } else {
        toast({
          title: "Ocorreu um erro ao enviar a mensagem",
          description: "Por favor, tente novamente mais tarde.",
        });
      }
    });
    form.reset();
  }

  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section id="contact" ref={ref} className="bg-neutral-50 md:p-12">
      <motion.div
        className="container"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h3 className="uppercase text-xl mb-6 font-semibold">
          Entre em contato conosco
        </h3>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 md:space-y-8 py-4 md:py-0"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["firstName", "lastName"].map((field, index) => (
                <FormField
                  key={index}
                  control={form.control}
                  name={field as "firstName" | "lastName"}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {field.name === "firstName" ? "Nome" : "Sobrenome"}
                      </FormLabel>
                      <motion.div
                        whileFocus={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <FormControl>
                          <Input
                            placeholder={`Informe seu ${
                              field.name === "firstName" ? "nome" : "sobrenome"
                            }...`}
                            {...field}
                          />
                        </FormControl>
                      </motion.div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["email", "phone"].map((field, index) => (
                <FormField
                  key={index}
                  control={form.control}
                  name={field as "email" | "phone"}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {field.name === "email" ? "E-mail" : "Telefone"}
                      </FormLabel>
                      <motion.div
                        whileFocus={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <FormControl>
                          <Input
                            placeholder={`Informe seu ${
                              field.name === "email" ? "e-mail" : "telefone"
                            }...`}
                            {...field}
                          />
                        </FormControl>
                      </motion.div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mensagem</FormLabel>
                  <motion.div
                    whileFocus={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FormControl>
                      <Textarea placeholder="Sua mensagem..." {...field} />
                    </FormControl>
                  </motion.div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-[74px]"
            >
              <Button type="submit">Enviar</Button>
            </motion.div>
          </form>
        </Form>
      </motion.div>
      <Toaster />
    </section>
  );
}
