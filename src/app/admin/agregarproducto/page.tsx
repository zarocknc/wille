"use client"

import { useState } from "react";
export default function AgregarProducto() {
    const [previewImage, setPreviewImage] = useState<string | ArrayBuffer | null>(
        null
    );
    const [imagen, setImagen] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);
    const [uploadUrl, setUploadUrl] = useState(null);
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        if (event.target.files && event.target.files.length > 0) {
            setImagen(event.target.files[0])
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(imagen!);
        } else {
            setPreviewImage(null);
        }

    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!imagen ) return;
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
            alert(`Error al subir imagen: ${error}`);
            setUploading(false);
        }
    }

    return <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nombre del producto" className="w-full max-w-xs input input-bordered" name="name" />
            <input type="file" accept="image/*" className="w-full max-w-xs file-input file-input-bordered" onChange={handleImageChange} />
            <button className="btn btn-primary" type="submit" disabled={!imagen || uploading}>Submit</button>
        </form>
        {previewImage && (
            <img
                src={previewImage as string}
                alt="Preview"
                style={{ maxWidth: "200px", maxHeight: "200px" }}
            />
        )}
        {uploadUrl && (<div>el valor de fileKey es: {uploadUrl}</div>)}
    </>
}