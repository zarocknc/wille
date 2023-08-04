import Image from 'next/image'
import LoginButton from "@/components/LoginButton";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-8">
      <h1>Hola esta es la pagina principal</h1>
      <p>Estas Logueado? </p>
      <LoginButton />


      <Link href='/admin/agregarproducto' className='btn btn-secondary'>agregar producto</Link>
      <Link href='/admin/verproducto' className='btn btn-secondary'>ver productos</Link>

      
    </main>
  )
}
