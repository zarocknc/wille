import Image from 'next/image'
import LoginButton from "@/components/LoginButton";

export default function Home() {
  return (
    <main className="p-8">
      <h1>Hola esta es la pagina principal</h1>
      <p>Estas Logueado? </p>
      <LoginButton />


      <a href="/admin/agregarproducto" className='btn btn-secondary'>agregar producto</a>

      
    </main>
  )
}
