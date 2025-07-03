import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors from "../libs/Errors";

const memberService = new MemberService(); // Service chaqiriladi

const memberController: T = {};

memberController.signup = async (req: Request, res: Response) => {
    try {
        console.log("signup");
        // console.log("body:", req.body);

        const input: MemberInput = req.body,
            result: Member = await memberService.signup(input); // Ro‘yxatdan o‘tkazamiz
        // TODO: TOKENS AUTHENTICATION

        res.json({ member: result }); // Natijani yuboramiz
    } catch (err) {
        console.log("Error, signup:", err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
};

memberController.login = async (req: Request, res: Response) => { // javascript / typescriptda promise qulay sintaksis va await ishlashiga ruhsat beradi
    try {
        console.log("login");
        const input: LoginInput = req.body,
            result = await memberService.login(input); // Loginni bajaradi (service ichida parol tekshiruvi bor)
        // TODO: TOKENS AUTHENTICATION

        res.json({ member: result }); // Login muvaffaqiyatli bo‘lsa, foydalanuvchi ma’lumotlari qaytariladi
    } catch (err) {
        console.log("Error, login:", err);
        // res.json({err });
    }
};



export default memberController;