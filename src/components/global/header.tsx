"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import JianzinLogo from "../../../public/logo/IMG_9319.png";
import { routes } from "@/network/routes";

interface NavItem {
  label: string;
  path?: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  { label: "Home", path: routes.home },
  {
    label: "About Us",
    children: [
      { label: "Company Overview", path: routes.about },
      { label: "Team Members", path: routes.teamMembers },
    ]
  },
  {
    label: "Products & Solutions", path: routes.solutions,
    // children: [
    //   { label: "Fire Extinguishers", path: routes.fireExtinguishers },
    //   { label: "Alarm Systems", path: routes.alarmSystems },
    //   { label: "Suppression Systems", path: routes.suppressionSystems },
    //   { label: "CCTV", path: routes.cctv },
    //   { label: "Solar Panels", path: routes.solarPanels },
    // ],
  },
  // {
  //   label: "Services",
  //   children: [
  //     { label: "Installation & Setup", path: routes.installationSetup },
  //     { label: "Maintenance & Inspection", path: routes.maintenanceInspection },
  //     { label: "Fire Safety Consultation", path: routes.fireSafetyConsultation },
  //     { label: "Fire Drill & Training", path: routes.fireDrillTraining },
  //   ],
  // },
  { label: "Projects & Clients", path: routes.projectsClients },
  {
    label: "Resources",
    children: [
      { label: "Blog & Safety Tips", path: routes.blogSafetyTips },
      { label: "Downloadables", path: routes.downloadables },
      { label: "Auto PDF Generator", path: routes.autoPdfGenerator },
    ],
  },
];

export const Header: React.FC = () => {
  const router = useRouter();

  return (
    <header className="bg-zinc-900 border-b border-zinc-700 shadow-lg sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => router.push("/")}
          >
            {/* <Image src={JianzinLogo} alt="Logo" width={40} height={40} /> */}
            <span className="text-md font-bold text-white">
              <span className="text-red-600">JIANZIN FIRE</span> & TECH SOLUTIONS
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <span
                  onClick={() => item.path && router.push(item.path)}
                  className="cursor-pointer text-gray-300 hover:text-white font-medium transition-colors duration-300 flex items-center gap-1 py-2"
                >
                  {item.label}
                  {item.children && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>

                {item.children && (
                  <div className="absolute left-0 mt-2 w-56 bg-zinc-800 border border-zinc-700 rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-10">
                    {item.children.map((child) => (
                      <div
                        key={child.label}
                        onClick={() => router.push(child.path!)}
                        className="px-4 py-3 hover:bg-zinc-700 cursor-pointer text-gray-300 hover:text-white transition-colors duration-200 first:rounded-t-md last:rounded-b-md"
                      >
                        {child.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <button 
            className="hidden md:block bg-red-800 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
            onClick={() => router.push("/contact")}
          >
            Contact Us
          </button>

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-300 hover:text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
