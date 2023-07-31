import * as Minio from 'minio';

export default async function addImage() {
    var minioClient = new Minio.Client({
        endPoint: 'http://127.0.0.1:9000/',
        port: 9000,
        useSSL: false, //TODO: activar en produccion (extremadamente vulnerable en false)
        accessKey: 'ERLT7dOeQ8qGgUkFdcfE"',
        secretKey: '0OoIS0kOZuVmLF2psvuZa5QaD48B8IWVyffA3uJw'
    });
    // File that needs to be uploaded.
    var file = '/tmp/photos-europe.tar'
    // Using fPutObject API upload your file to the bucket europetrip.
    await minioClient.fPutObject('centrocomputo', 'photos-europe.tax', file);

}