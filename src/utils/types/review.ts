import { StaticImageData } from "next/image";

type ReviewType = {
  name: string;
  feedback: string;
  stars: number;
  image: StaticImageData;
};

export type { ReviewType };