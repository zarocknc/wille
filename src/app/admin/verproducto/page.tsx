import prisma from "@/lib/prisma";
import Image from 'next/image'

export default async function VerProductos() {
    const productos = await prisma.products.findMany();
    //const productos = await GetImages();

    return (<>
        {productos.map((product) => (
            <div key={product.id}>
                <Image src={`http://192.168.1.69:9000/productos/${product.title}`} alt={product.title} width={500} height={500} />

            </div>
        ))}
    </>)
}