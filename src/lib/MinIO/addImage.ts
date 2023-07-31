import * as Minio from 'minio';

export default async function addImage(title: String, image: File): Promise<string> {
    const minioClient = new Minio.Client({
        endPoint: 'http://127.0.0.1:9000/',
        port: 9000,
        useSSL: false, //TODO: activar en produccion (extremadamente vulnerable en false)
        accessKey: '1FYGNMwEPhJ20a2AeV68',
        secretKey: 'xCWu4NLD0IlDKQZpuLX7j9SJHccEw6beXyydbaJi'
    });
    if (image) {
    const imageName = image.name;
    const fileKey: string = `images/${Date.now()}_${imageName}`;
    const bytes = await image.arrayBuffer();
    const imgBuffer = Buffer.from(bytes);
    minioClient.putObject('centrocomputo', fileKey, imgBuffer, function (error, objInfo) {
            if (error) {
                return error;
            }
            console.log("EXITO", objInfo);
            console.log("agregar objectName",fileKey)
            return fileKey;
        });
    }
    // Using fPutObject API upload your file to the bucket europetrip.
    return "no lo se"

}