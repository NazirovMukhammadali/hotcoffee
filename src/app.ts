import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";

import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";
import { T } from "./libs/types/common";

//TCP-2
const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore({
    uri: String(process.env.MONGO_URL),
    collection: "sessions",
})

/** 1-ENTRACE **/ //Middleware pattern orqali
const app = express(); // object > backend qurish /tr api
app.use(express.static(path.join(__dirname, "public"))); //public ochiqlash/middleware DP/tr api
app.use(express.urlencoded({ extended: true })); // middleware dp > support traditional api
app.use(express.json()); // middleware dp > support rest api
app.use(morgan(MORGAN_FORMAT));

/** 2-SESSIONS **/
app.use(
    session({
        secret: String(process.env.SESSION_SECRET),
        cookie: {
            maxAge: 1000 * 3600 * 6, //6h
        },
        store: store,
        resave: true,
        saveUninitialized: true,
    })
);
app.use(function (req, res, next) {
    const sessionInstance = req.session as T;
    res.locals.member = sessionInstance.member;
    next();
});

/** 3-VIEWS **/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs"); // View engine sifatida EJS ishlatiladi (SSR rendering uchun)

/** 4-ROUTERS **/
app.use("/admin", routerAdmin);  // BSSR: EJS
app.use("/", router);  // SPA: REACT /frontend uchun

export default app;