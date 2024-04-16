import express from "express";
import cors from "cors";
import { fileUploader } from "./tool/fileUploader.js";

const app = express();
const router = express.Router();
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));

router.get("/", (req, res) => {
    res.send("file_uploader_b64_connected");
});

router.post("/", (req, res) => {
    const {file, fileName} = req.body;
    fileUploader.uploadFile( file, './uploads', fileName);
    res.send("File uploaded successfully!");
});

app.use(router);
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});




