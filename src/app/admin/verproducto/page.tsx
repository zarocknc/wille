import { Productos } from "./Productos"
import { Suspense } from "react"
import Loading from "./loading"


export default async function VerProductos() {

    return (<>
        <h1>Lista de Productos</h1>
        <Suspense fallback={<Loading />}>
            <Productos />
        </Suspense>


    </>)
}