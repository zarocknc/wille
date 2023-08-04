"use client"
import { signOut, signIn } from "next-auth/react"
import { useSession } from "next-auth/react"
import { Icon } from '@iconify/react';


export default function Component() {
    const { data: session} = useSession()

  if (session) {
    return (
      <>
        <a className="hidden btn btn-primary sm:flex" onClick={()=> {signOut()}}>Cerrar sesion</a>
            <a href="#" className="sm:hidden btn btn-ghost"><Icon icon="mdi:user" /></a>
      </>
    )
  }
  return (
    <>
      <a className="hidden btn btn-primary sm:flex" onClick={() => {signIn()}}>Iniciar sesion</a>
            <a href="#" className="sm:hidden">Ini</a>
    </>
  )
}