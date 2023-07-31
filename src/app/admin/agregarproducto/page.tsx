"use client"

import { useState } from "react";

const handleSubmit = () => {
}

export default function AgregarProducto() {
    const [previewImage, setPreviewImage] = useState<string | ArrayBuffer | null>(
        null
    );
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setPreviewImage(null);
        }
    };
    return <>
        <form action={handleSubmit} className="">
            <input type="text" placeholder="Nombre del producto" className="w-full max-w-xs input input-bordered" name="name" />
            <input type="file" accept="image/*" className="w-full max-w-xs file-input file-input-bordered" onChange={handleImageChange} />
            <button className="btn btn-primary" type="submit">Submit</button>
        </form>
        {previewImage && (
        <img
          src={previewImage as string}
          alt="Preview"
          style={{ maxWidth: "200px", maxHeight: "200px" }}
        />
      )}
    </>
}