import mongoose, { Schema } from "mongoose";
import { MemberStatus, MemberType } from "../libs/enums/member.enum";

const memberSchema = new Schema({
    memberType: {
        type: String,
        enum: MemberType,
        default: MemberType.USER
    },

    memberStatus: {
        type: String,
        enum: MemberStatus,
        default: MemberStatus.ACTIVE,
    },

    memberNick: {
        type: String,
        index: { unique: true, sparse: true },  // Takrorlanmas nickname
        required: true,  // Majburiy qiymat
    },

    memberPhone: {
        type: String,
        index: { unique: true, sparse: true }, // Telefon raqam ham unique bo'lishi kerak
        required: true,
    },

    memberPassword: {
        type: String,
        select: false, // Parolni so‘rovda ko‘rsatmaydi
        required: true,
    },

    memberAddress: {
        type: String,
    },

    memberDesc: {
        type: String,
    },

    memberImage: {
        type: String,
    },

    memberPoint: {
        type: Number,
        default: 0,
    },
},
    { timestamps: true }  // updatedAt, createdAt
);

export default mongoose.model("Member", memberSchema);