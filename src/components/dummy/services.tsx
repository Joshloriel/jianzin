import {  Flame, ShieldCheck, Camera, Sun, FireExtinguisher, Droplets } from "lucide-react";


const services = [
  { icon: <Flame className="w-8 h-8" />, title: "Fire Alarm Systems", description: "FDAS installation & maintenance" },
  { icon: <Droplets  className="w-8 h-8" />, title: "Sprinkler Systems", description: "Automatic fire suppression" },
  { icon: <FireExtinguisher className="w-8 h-8" />, title: "Fire Extinguishers", description: "All types & refilling services" },
  { icon: <Camera className="w-8 h-8" />, title: "CCTV Systems", description: "HD surveillance solutions" },
  { icon: <Sun className="w-8 h-8" />, title: "Solar Street Lights", description: "LGU-focused installations" },
  { icon: <ShieldCheck className="w-8 h-8" />, title: "Custom Orders", description: "Specialty equipment sourcing" }
];

export { services };