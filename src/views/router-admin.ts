import express from "express";
const routerAdmin = express.Router();
import restaurantController from "../controllers/restaurant.controller";

/* Restaurant */
routerAdmin.get("/", restaurantController.goHome);

routerAdmin
    .get("/login", restaurantController.getLogin) // GET /admin/login → Login sahifasini ko‘rsatadi (SSR EJS orqali)
    .post("/login", restaurantController.processLogin); // POST /admin/login → Foydalanuvchi login ma’lumotini tekshiradi

routerAdmin
    .get("/signup", restaurantController.getSignup)
    .post("/signup", restaurantController.processSignup);

/* Product */
/* User */

export default routerAdmin;