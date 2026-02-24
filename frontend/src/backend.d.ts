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
export interface backendInterface {
    getAllNewsletterEmails(): Promise<Array<string>>;
    getContactInfo(): Promise<{
        email: string;
        phone: string;
    }>;
    getUserContacts(user: Principal): Promise<Array<ContactEntry>>;
    submitContactEntry(name: string, email: string, phone: string, message: string): Promise<boolean>;
    subscribeNewsletter(email: string): Promise<boolean>;
}
