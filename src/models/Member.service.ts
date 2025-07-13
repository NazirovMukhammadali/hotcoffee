import MemberModel from "../schema/Member.model"; // Mongoose modeli: MongoDB bilan ishlash uchun
import { LoginInput, Member, MemberInput } from "../libs/types/member"; // Kirish va ro'yxatdan o'tish uchun typelar
import Errors, { HttpCode, Message } from "../libs/Errors"; // Xatoliklarni boshqarish uchun maxsus klass va statuslar
import { MemberType } from "../libs/enums/member.enum"; // Enum: masalan USER, ADMIN, RESTAURANT
import * as bcrypt from "bcryptjs"; // Parolni xeshlash va solishtirish uchun kutubxona

class MemberService {
    private readonly memberModel;

    constructor() {
        this.memberModel = MemberModel; // Mongoose modelni classga biriktiradi
    }

    /* SPA */
    public async signup(input: MemberInput): Promise<Member> {
        const salt = await bcrypt.genSalt(); // Parolni xeshlash uchun tuz (salt) yaratadi
        input.memberPassword = await bcrypt.hash(input.memberPassword, salt); // Parolni xavfsiz holga keltiradi

        try {
            const result = await this.memberModel.create(input); // Yangi memberni bazaga qo‘shadi
            result.memberPassword = ""; // Parolni qaytariladigan objectdan olib tashlaydi
            return result.toJSON();
        } catch (err) {
            throw new Errors(HttpCode.BAD_REQUEST, Message.USED_NICK_PHONE);
        }
    }

    public async login(input: LoginInput): Promise<Member> {
        // TODO: Consider member status
        const member = await this.memberModel
            .findOne(
                { memberNick: input.memberNick }, // Nick orqali izlaydi
                { memberNick: 1, memberPassword: 1 } // Faqat `nick` va `password`ni olish
            )
            .exec();
        if (!member)
            throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);

        const isMatch = await bcrypt.compare(
            input.memberPassword,
            member.memberPassword
        ); // Kiritilgan parolni saqlangan hash bilan solishtiradi

        if (!isMatch) {
            throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD);
        }

        return await this.memberModel.findById(member._id).lean().exec(); // Parol o‘chirilgan holda full ma'lumotni olib qaytaradi
    }


    /* BSSR */
    public async processSignup(input: MemberInput): Promise<Member> {
        const exist = await this.memberModel
            .findOne({ memberType: MemberType.RESTAURANT }) //"RESTAURANT" tipi mavjudmi — shuni tekshiradi
            .exec();
        if (exist)
            throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED); // Agar mavjud bo‘lsa — xatolik chiqaradi

        const salt = await bcrypt.genSalt(); // Parolni xeshlash uchun tuz (salt) yaratadi
        input.memberPassword = await bcrypt.hash(input.memberPassword, salt); // Parolni xavfsiz holga keltiradi

        try {
            console.log("Signup input:", input);
            const result = await this.memberModel.create(input); // Yangi memberni bazaga qo‘shadi
            result.memberPassword = ""; // Parolni qaytariladigan objectdan olib tashlaydi
            return result;
        } catch (err) {
            console.log("Signup error:", err);
            console.dir(err, { depth: null });
            throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
        }
    }

    public async processLogin(input: LoginInput): Promise<Member> {
        const member = await this.memberModel
            .findOne(
                { memberNick: input.memberNick }, // Nick orqali izlaydi
                { memberNick: 1, memberPassword: 1 } // Faqat `nick` va `password`ni olish
            )
            .exec();
        if (!member)
            throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);

        const isMatch = await bcrypt.compare(
            input.memberPassword,
            member.memberPassword
        ); // Kiritilgan parolni saqlangan hash bilan solishtiradi

        if (!isMatch) {
            throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD);
        }

        return await this.memberModel.findById(member._id).exec(); // Parol o‘chirilgan holda full ma'lumotni olib qaytaradi
    }
}


export default MemberService;