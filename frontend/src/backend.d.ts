import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactEntry {
    name: string;
    email: string;
    message: string;
    phone: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    adminGetAllContacts(): Promise<Array<[Principal, Array<ContactEntry>]>>;
    adminGetAllNewsletterEmails(): Promise<Array<string>>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getCallerUserRole(): Promise<UserRole>;
    getContactInfo(): Promise<{
        email: string;
        phone: string;
    }>;
    getUserContacts(user: Principal): Promise<Array<ContactEntry>>;
    isCallerAdmin(): Promise<boolean>;
    submitContactEntry(name: string, email: string, phone: string, message: string): Promise<boolean>;
    subscribeNewsletter(email: string): Promise<boolean>;
}
