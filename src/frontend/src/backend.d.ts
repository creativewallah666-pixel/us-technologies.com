import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type SubmitInquiryResult = {
    __kind__: "ok";
    ok: bigint;
} | {
    __kind__: "err";
    err: string;
};
export interface Inquiry {
    id: bigint;
    name: string;
    submittedAt: bigint;
    email: string;
    requirementType: RequirementType;
    message: string;
    phone: string;
}
export enum RequirementType {
    home = "home",
    agriculture = "agriculture",
    industry = "industry"
}
export interface backendInterface {
    getInquiries(): Promise<Array<Inquiry>>;
    submitInquiry(name: string, phone: string, email: string, requirementType: RequirementType, message: string): Promise<SubmitInquiryResult>;
}
