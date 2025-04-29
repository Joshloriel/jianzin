import PicturePlaceholder from "../../../public/img/placeholder.jpg";
import type { ProjectType } from "@/utils/types/project";
  
  const projects: ProjectType[] = [
    {
      title: "LGU Solar Lighting",
      description: "Installed 50+ solar street lights across the municipality",
      image: PicturePlaceholder,
    },
    {
      title: "Corporate FDAS",
      description: "Complete fire detection system for 10-story office building",
      image: PicturePlaceholder,
    },
    {
      title: "School Safety",
      description: "Fire extinguishers and alarm systems for educational facility",
      image: PicturePlaceholder,
    },
  ];

  export { projects };