import { StaticImageData } from 'next/image';

export type ClientType = {
  id: number;
  name: string;
  logo: StaticImageData;
  sector?: string;
  description?: string;
  website?: string;
  email?: string;
  phone?: string;
  address?: string;
  projectsCompleted?: number;
  partnershipStartDate?: string;
};