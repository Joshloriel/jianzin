import { StaticImageData } from "next/image";

export interface TEAM {
    name: string;
    role: string;
    email: string;
    image: StaticImageData;
    bio: string;
}