import Link from 'next/link';

import { createClient } from '@/utils/supabase/server';

export default async function Home() {

  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  const thereUser = Boolean(data.user)

  return (
    <div className="w-full h-auto p-5 flex justify-center flex-col items-center">
      <h1 className='text-base font-bold m-4 text-[var(--text-100-light)] dark:text-[var(--text-100-dark)]'>Bienvenido a tareas web</h1>
      {thereUser ? (
        <button>

        </button>
      ) : (
        <Link
          href="/signin"
          className="
        text-[var(--text-100-dark)]
        hover:text-[var()]
        hover:bg-opacity-50
        bg-[var(--primary-100-dark)]

        focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">
          inicia sesion
        </Link>
      )}
    </div>
  );
}
