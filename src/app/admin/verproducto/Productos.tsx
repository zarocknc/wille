import prisma from "@/lib/prisma";
import Image from "next/image";

export async function Productos() {
    const productos = await prisma.products.findMany();
    return (<div>
        <div className="grid grid-cols-4 gap-4 border-primary border-4">
            {productos.map((product) => (
                <div key={product.id} className="border-2 border-secondary">
                    <Image className="w-full" src={`http://192.168.1.69:9000/productos/${product.title}`} alt={product.title} width="300" height="200" />
                    <h2>{product.title}</h2>
                </div>
            ))}

        </div>
    </div>)
}