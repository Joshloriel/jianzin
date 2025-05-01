import { StaticImageData } from "next/image";

export type Article = {
  title: string;
  content: string;
  image: StaticImageData;
  category: string;
  date: string;
  readTime: string;
};

export type SafetyTip = {
  title: string;
  content: string;
  category: string;
  additionalInfo?: string;
};