import { NextFunction, Request, Response } from "express";                      // Express'ning request va response tiplari
import { T } from "../libs/types/common";                         // Controller type
import MemberService from "../models/Member.service";             // Biznes logika joylashgan service class
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";   // Login va signup uchun typelar
import { MemberType } from "../libs/enums/member.enum";           // Foydalanuvchi turlari
import Errors, { Message } from "../libs/Errors";

const memberService = new MemberService(); // Service chaqiriladi

const restaurantController: T = {}; // Controller funksiyalar saqlanadigan bo‘sh obyekt

restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log("goHome");
        res.render("home");
    } catch (err) {
        console.log("Error, goHome:", err);
        res.redirect("/admin");
    }
};

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log("getSignup");
        res.render("signup");
    } catch (err) {
        console.log("Error, getSignup:", err);
        res.redirect("/admin");
    }
};

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log("getLogin");
        res.render("login");

    } catch (err) {
        console.log("Error, getLogin:", err);
        res.redirect("/admin");
    }
};


restaurantController.processSignup = async (
    req: AdminRequest,
    res: Response
) => {
    try {
        console.log("processSignup");
        // console.log("body:", req.body);

        const newMember: MemberInput = req.body
        newMember.memberType = MemberType.RESTAURANT; // Admin orqali faqat RESTAURANT turida a’zo yaratiladi
        const result = await memberService.processSignup(newMember); // Ro‘yxatdan o‘tkazamiz
        // TODO: AUTHENTICATION

        req.session.member = result;
        req.session.save(function () {
            res.send(result); // Natijani yuboramiz
        });

    } catch (err) {
        console.log("Error, processSignup:", err);
        const message =
            err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(
            `<script> alert("${message}"); window.location.replace('admin/login') </script>`
        );
    }
};


restaurantController.processLogin = async (req: AdminRequest, res: Response) => { // javascript / typescriptda promise qulay sintaksis va await ishlashiga ruhsat beradi
    try {
        console.log("processLogin");
        console.log("body:", req.body); // Foydalanuvchi yuborgan login ma’lumotlari
        const input: LoginInput = req.body,
            result = await memberService.processLogin(input); // Loginni bajaradi (service ichida parol tekshiruvi bor)
        // TODO: SESSIONS AUTHENTICATION

        req.session.member = result;
        req.session.save(function () {
            res.send(result); // Natijani yuboramiz
        });

    } catch (err) {
        console.log("Error, processLogin:", err);
        const message =
            err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(
            `<script> alert("${message}"); window.location.replace('admin/login') </script>`
        );
    }
};

restaurantController.logout = async (req: AdminRequest, res: Response) => { // javascript / typescriptda promise qulay sintaksis va await ishlashiga ruhsat beradi
    try {
        console.log("logout");
        req.session.destroy(function () {
            res.redirect("/admin");
        });

    } catch (err) {
        console.log("Error, logout:", err);
        res.redirect("/admin");
    }
};

restaurantController.checkAuthSession = async (req: AdminRequest, res: Response) => { // javascript / typescriptda promise qulay sintaksis va await ishlashiga ruhsat beradi
    try {
        console.log("checkAuthSession");
        if (req.session?.member)
            res.send(`<script> alert("${req.session.member.memberNick}") </script>`);
        else res.send(`<script> alert("${Message.NOT_AUTHENTICATED}") </script>`);

    } catch (err) {
        console.log("Error, checkAuthSession:", err);
        res.send(err);
    }
};

restaurantController.verifyRestaurant = (
    req: AdminRequest,
    res: Response,
    next: NextFunction
) => {
    if (req.session?.member?.memberType === MemberType.RESTAURANT) {
        req.member = req.session.member;
        next();
    } else {
        const message = Message.NOT_AUTHENTICATED;
        res.send(
            `<script> alert("${message}"); window.location.replace('/admin/login'); </script>`
        );
    }
};

export default restaurantController;