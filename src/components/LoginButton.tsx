"use client"
import { signOut, signIn } from "next-auth/react"
import { useSession } from "next-auth/react"


export default function Component() {
    const { data: session} = useSession()

  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <button className="btn btn-primary" onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Mano no estas logueado <br />
      <button className="btn btn-secondary" onClick={() => signIn()}>Sign in</button>
    </>
  )
}