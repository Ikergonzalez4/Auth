import { Link } from "react-router-dom";

function HomePage() {
  return (
  <section className="h-[calc(100vh-100px)] flex justify-center items-center">
    <header className="bg-zinc-800 p-10">
      <h1 className="text-5xl py-2 font-bold">React Tasks</h1>
      <p className="text-md text-slate-400">
        Está es mi pagina web de tareas con login y register 
        <br />
        Aquí tienes un usuario y contraseña de pruebas
        <br />
        Usuario: alejandro@gmail.com
        <br />
        Contraseña: alejandro
      </p>

      <Link
        className="bg-zinc-500 text-white px-4 py-2 rounded-md mt-4 inline-block"
        to="/login"
      >
        Get Started
      </Link>
    </header>
  </section>
  );
}

export default HomePage;
