import dotenv from 'dotenv';
dotenv.config(); // .env faylni ishga tushuradi (masalan, MONGO_URL va PORT ni o'qish uchun)
import mongoose from 'mongoose'; // ma'lumotlar bilan model orqali ishlash uchun
import app from "./app";

mongoose
    .connect(process.env.MONGO_URL as string, {}) // MongoDB bilan ulanish (env fayldan URL olinadi)
    .then((data) => {
        console.log("MongoDB connetion succeed");
        const PORT = process.env.PORT ?? 3003;
        app.listen(PORT, function () {
            console.log(`The server is running successfilly on port: ${PORT}`);
        });
    })
    .catch((err) => console.log("ERROR on connection MongoDB", err));
