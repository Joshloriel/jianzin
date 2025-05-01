import PicturePlaceholder from "../../../public/img/placeholder.jpg";
import type { ProjectType } from "@/utils/types/project";

const projects: ProjectType[] = [
  {
    id: "1",
    title: "LGU Solar Lighting",
    description: "Installed 50+ solar street lights across the municipality",
    image: PicturePlaceholder,
    details:
      "Implemented a comprehensive solar street lighting solution for a local government unit, covering 5 barangays with energy-efficient LED lighting. The project included site assessment, custom pole design, and maintenance planning.",
    services: [
      "Solar Street Light Installation",
      "Site Assessment",
      "Maintenance Planning",
    ],
    client: "Municipality of Sample",
    date: "March 2023",
    location: "Province of Sample",
    category: "Solar Energy",
    tags: ["Solar", "Street Lighting", "Local Government", "Sustainability"],
  },
  {
    id: "2",
    title: "Corporate FDAS",
    description: "Complete fire detection system for 10-story office building",
    image: PicturePlaceholder,
    details:
      "Designed and installed a full Fire Detection and Alarm System (FDAS) for a corporate headquarters, including smoke detectors, manual call points, and centralized monitoring system compliant with the latest fire code regulations.",
    services: ["FDAS Design", "System Installation", "Fire Code Compliance"],
    client: "ABC Corporation",
    date: "January 2023",
    location: "Makati City",
    category: "Fire Safety",
    tags: [
      "Fire Detection",
      "Corporate Safety",
      "Building Compliance",
      "FDAS",
    ],
  },
  {
    id: "3",
    title: "School Safety",
    description: "Fire extinguishers and alarm systems for educational facility",
    image: PicturePlaceholder,
    details:
      "Equipped a private school with complete fire safety systems including fire extinguishers, alarm systems, and emergency lighting. Conducted fire safety training for staff and evacuation drills for students.",
    services: [
      "Fire Extinguisher Installation",
      "Alarm System Setup",
      "Safety Training",
    ],
    client: "Sample Private School",
    date: "November 2022",
    location: "Quezon City",
    category: "Fire Safety",
    tags: ["Fire Safety", "Education", "Training", "Alarm Systems"],
  },
  {
    id: "4",
    title: "Hospital Fire Protection",
    description: "Complete fire suppression system for medical facility",
    image: PicturePlaceholder,
    details:
      "Installed specialized fire suppression systems in a 200-bed hospital, including sprinklers in critical areas and fire-rated doors in patient zones. System designed to minimize disruption to medical operations.",
    services: [
      "Sprinkler System Installation",
      "Fire-rated Doors",
      "Emergency Lighting",
    ],
    client: "Sample Medical Center",
    date: "August 2022",
    location: "N/A",
    category: "Fire Safety",
    tags: ["Healthcare Safety", "Fire Suppression", "Sprinklers", "Hospitals"],
  },
  {
    id: "5",
    title: "Retail Mall Safety",
    description: "CCTV and fire safety for large shopping complex",
    image: PicturePlaceholder,
    details:
      "Integrated security and fire safety solution for a 3-level shopping mall, combining CCTV surveillance with fire alarm systems and emergency exit lighting for comprehensive protection.",
    services: ["CCTV Installation", "Fire Alarm System", "Emergency Lighting"],
    client: "Sample Shopping Mall",
    date: "May 2022",
    location: "N/A",
    category: "Security & Fire Safety",
    tags: ["CCTV", "Retail", "Fire Safety", "Emergency Lighting"],
  },
  {
    id: "6",
    title: "Industrial Warehouse",
    description: "Fire protection for storage facility",
    image: PicturePlaceholder,
    details:
      "Custom fire suppression solution for a 5,000 sqm warehouse storing flammable materials, including specialized foam suppression system and thermal detection.",
    services: [
      "Foam Suppression System",
      "Thermal Detection",
      "Fireproofing",
    ],
    client: "Sample Logistics Co.",
    date: "February 2022",
    location: "N/A",
    category: "Fire Safety",
    tags: ["Industrial Safety", "Warehousing", "Fireproofing", "Foam Systems"],
  },
];

export { projects };