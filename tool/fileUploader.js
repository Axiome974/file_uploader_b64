import fs from "fs";


export const fileUploader = {

    uploadFile(fileB64, path, fileName) {
        const filePart = fileB64.split(";base64,")[1];
        fs.writeFileSync( `${path}/${fileName}`, filePart, {encoding: 'base64'});
    }

}

