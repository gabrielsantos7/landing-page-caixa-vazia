export function Footer() {
  return (
    <footer className="py-3 grid grid-cols-4 place-items-center bg-indigo-500">
      <a href="#">
        <img
          src="https://i.ibb.co/WkBGzgB/logo.png"
          alt="Logo Caixa Vazia"
          className="w-16 md:w-24 opacity-75 hover:opacity-100 duration-300"
        />
      </a>
      <p className="col-span-3 text-xs md:text-base">
        &copy; {new Date().getFullYear()} Projeto Caixa Vazia. Todos os direitos
        reservados.
      </p>
    </footer>
  );
}
