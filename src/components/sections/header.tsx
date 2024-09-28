import { useState } from "react";

import Logo from "/logo.png";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center bg-gradient-to-b from-black/50 to-transparent fixed top-0 w-full h-20 z-50">
      <a href="#">
        <img
          src={Logo}
          alt="Logo Caixa Vazia"
          className="w-16 md:w-20 absolute top-4 left-6"
        />
      </a>
      <div className="sm:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center px-3 py-2 rounded-md"
        >
          <div>
            <div className="bg-white h-0.5 w-5 rounded" />
            <div className="bg-white h-0.5 w-5 rounded my-1" />
            <div className="bg-white h-0.5 w-5 rounded" />
          </div>
        </button>
      </div>
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        }  bg-white absolute top-16 right-6 rounded-lg shadow-lg p-6 sm:p-0 sm:top-4 sm:flex sm:items-center sm:gap-6 sm:bg-transparent sm:shadow-none sm:text-neutral-100`}
      >
        <li className="my-2 sm:my-0">
          <a href="#" className="hover:underline" onClick={toggleMenu}>
            Início
          </a>
        </li>
        <li className="my-2 sm:my-0">
          <a href="#features" className="hover:underline" onClick={toggleMenu}>
            Funcionalidades
          </a>
        </li>
        <li className="my-2 sm:my-0">
          <a href="#about" className="hover:underline" onClick={toggleMenu}>
            Sobre
          </a>
        </li>
        <li className="my-2 sm:my-0">
          <a href="#contact" className="hover:underline" onClick={toggleMenu}>
            Contato
          </a>
        </li>
        <li className="mt-4 sm:mt-0">
          <a
            href="https://projeto-caixa-vazia.onrender.com"
            className="py-2 px-6 rounded-full ring-2 ring-neutral-100 hover:text-neutral-800 hover:bg-neutral-100 duration-500"
            onClick={toggleMenu}
          >
            Entrar
          </a>
        </li>
      </ul>
    </header>
  );
}
