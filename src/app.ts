import express from "express"; // Express framework: HTTP serverni boshqarish uchun
import path from "path";
import router from "./views/router"; // Asosiy (foydalanuvchi) marshrutlar (SPA: React bilan bog‘liq)
import routerAdmin from "./views/router-admin"; // Admin interfeys uchun marshrutlar (SSR: EJS bilan bog‘liq)
import morgan from "morgan"; // HTTP so‘rovlarni logga chiqaruvchi middleware
import { MORGAN_FORMAT } from "./libs/config"; // Morgan format

/** 1-ENTRACE **/ //Middleware pattern orqali
const app = express(); // object > backend qurish
app.use(express.static(path.join(__dirname, "public"))); // public ochiqlash / middleware DP 
app.use(express.urlencoded({ extended: true })); // HTML form ma'lumotlarini `req.body`ga  qiladi middleware dp > support traditional api
app.use(express.json()); // middleware dp > support rest api
app.use(morgan(MORGAN_FORMAT));

/** 2-SESSIONS **/

/** 3-VIEWS **/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs"); // View engine sifatida EJS ishlatiladi (SSR rendering uchun)

/** 4-ROUTERS **/
app.use("/admin", routerAdmin);  // BSSR: EJS
app.use("/", router);  // SPA: REACT /frontend uchun

export default app;