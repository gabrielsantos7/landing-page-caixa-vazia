export function Footer() {
  return (
    <footer className="py-3 flex items-center justify-around flex-col gap-3 sm:flex-row bg-gradient-to-br from-emerald-400 to-teal-600">
      <a href="#">
        <img
          src="https://i.ibb.co/WkBGzgB/logo.png"
          alt="Logo Caixa Vazia"
          className="w-16 md:w-24 opacity-75 hover:opacity-100 duration-300"
        />
      </a>
      <p className="text-xs md:text-base">
        &copy; {new Date().getFullYear()} Projeto Caixa Vazia. Todos os direitos
        reservados.
      </p>
    </footer>
  );
}
