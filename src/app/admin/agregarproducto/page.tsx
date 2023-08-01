"use client"

import { useForm, SubmitHandler } from "react-hook-form"
import { useState } from "react";

type Inputs = {
    title: string,
    image: File
}


export default function AgregarProducto() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()


    const [imagen, setImagen] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);
    const [uploadUrl, setUploadUrl] = useState<string | null>(null);
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        if (event.target.files && event.target.files.length > 0) {
            setImagen(event.target.files[0])
        }

    };
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data)
        if (data.image && data.title && imagen) {
            console.log("enviando al servidor");
            setUploading(true);
            const formData = new FormData();
            formData.append('imagen', imagen);
            try {
                const response = await fetch('/api/admin/addProduct', {
                    method: 'POST',
                    body: formData,
                });
                const data = await response.json();
                setUploadUrl(data.fileKey);
                setUploading(false);
            } catch (error) {
                alert(`Error al subir imagen ${error}`);
                setUploading(false);
            }
        }
    }
    // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     if (!imagen ) return;
    //     setUploading(true);
    //     const formData = new FormData();
    //     formData.append('imagen', imagen);
    //     try {
    //         const response = await fetch('/api/admin/addProduct', {
    //             method: 'POST',
    //             body: formData,
    //         });
    //     const data = await response.json();
    //     setUploadUrl(data.fileKey);
    //     setUploading(false);
    //     } catch (error) {
    //         alert(`Error al subir imagen: ${error}`);
    //         setUploading(false);
    //     }
    // }

    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Nombre del producto" {...register("title")} className="w-full max-w-xs input input-bordered" />
            <input type="file" accept="image/*" {...register("image")} className="w-full max-w-xs file-input file-input-bordered" onChange={handleImageChange} />
            <button className="btn btn-primary" type="submit" disabled={!imagen || uploading}>Submit</button>
        </form>
        {imagen && (
            <img
                // src={previewImage as string}
                src={URL.createObjectURL(imagen)}
                alt="Preview"
                style={{ maxWidth: "200px", maxHeight: "200px" }}
            />
        )}
        {uploadUrl && (<div>el valor de fileKey es: {uploadUrl}</div>)}
    </>
}