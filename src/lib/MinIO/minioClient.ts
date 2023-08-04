import * as Minio from 'minio';

export const minioClient = new Minio.Client({
    endPoint: process.env.MINIO_HOST as string,
    port: Number(process.env.MINIO_PORT),
    useSSL: false, //TODO: activar en produccion (extremadamente vulnerable en false)
    accessKey: process.env.MINIO_ACCESSKEY as string,
    secretKey: process.env.MINIO_SECRETKEY as string
});


