import { Request, Response } from "express";                      // Express'ning request va response tiplari
import { T } from "../libs/types/common";                         // Controller type
import MemberService from "../models/Member.service";             // Biznes logika joylashgan service class
import { LoginInput, MemberInput } from "../libs/types/member";   // Login va signup uchun typelar
import { MemberType } from "../libs/enums/member.enum";           // Foydalanuvchi turlari

const memberService = new MemberService(); // Service chaqiriladi

const restaurantController: T = {}; // Controller funksiyalar saqlanadigan bo‘sh obyekt

restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log("goHome");
        res.render("home");
    } catch (err) {
        console.log("Error, goHome:", err);
    }
};

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log("getSignup");
        res.render("signup");
    } catch (err) {
        console.log("Error, getSignup:", err);
    }
};

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log("getLogin");
        res.render("login");

    } catch (err) {
        console.log("Error, getLogin:", err);
    }
};


restaurantController.processSignup = async (req: Request, res: Response) => {
    try {
        console.log("processSignup");
        // console.log("body:", req.body);

        const newMember: MemberInput = req.body
        newMember.memberType = MemberType.RESTAURANT; // Admin orqali faqat RESTAURANT turida a’zo yaratiladi
        const result = await memberService.processSignup(newMember); // Ro‘yxatdan o‘tkazamiz
        // TODO: AUTHENTICATION

        res.send(result); // Natijani yuboramiz
    } catch (err) {
        console.log("Error, processSignup:", err);
        res.send(err);
    }
};


restaurantController.processLogin = async (req: Request, res: Response) => { // javascript / typescriptda promise qulay sintaksis va await ishlashiga ruhsat beradi
    try {
        console.log("processLogin");
        console.log("body:", req.body); // Foydalanuvchi yuborgan login ma’lumotlari
        const input: LoginInput = req.body,
            result = await memberService.processLogin(input); // Loginni bajaradi (service ichida parol tekshiruvi bor)
        // TODO: SESSIONS AUTHENTICATION

        res.send(result); // Login muvaffaqiyatli bo‘lsa, foydalanuvchi ma’lumotlari qaytariladi
    } catch (err) {
        console.log("Error, processLogin:", err);
        res.send(err);
    }
};


export default restaurantController;