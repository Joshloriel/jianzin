import { StaticImageData } from "next/image";

type ProjectType = {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  details?: string;
  services?: string[];
  client?: string;
  location?: string;
  date?: string;
  tags?: string[];
  category?: string;
};

export type { ProjectType };