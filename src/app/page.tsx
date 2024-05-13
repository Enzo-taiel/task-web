import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full h-auto p-5 flex justify-center flex-col items-center">
      <h1 className='text-base font-bold m-4'>bienvenido a tareas web</h1>
      <main>
        <Link
          href="/create"
          className="hover:shadow-md transition-all m-4 bg-[--background-paper] hover:bg-[--background-paper-hover] p-2 rounded-md"
        >
          crear tarea
        </Link>
        <Link
          href="/delete"
          className="hover:shadow-md transition-all m-4 bg-[--background-paper] hover:bg-[--background-paper-hover] p-2 rounded-md"
        >
          eliminar tarea
        </Link>
        <Link
          href="/edit"
          className="hover:shadow-md transition-all m-4 bg-[--background-paper] hover:bg-[--background-paper-hover] p-2 rounded-md"
        >
          editar tarea
        </Link>
        <Link
          href="/list"
          className="hover:shadow-md transition-all m-4 bg-[--background-paper] hover:bg-[--background-paper-hover] p-2 rounded-md"
        >
          listar tareas
        </Link>
      </main>
    </div>
  );
}
