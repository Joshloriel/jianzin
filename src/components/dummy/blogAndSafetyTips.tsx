import { Article, SafetyTip } from "@/utils/types/blogAndSafetyTips";
import PicturePlaceholder from "../../../public/img/placeholder.jpg";

export const articles: Article[] = [
 {
  title: "Why Fire Extinguisher Types Matter",
  content: "Fire extinguishers are not one-size-fits-all. Each type—A, B, C, D, and K—is designed for specific fire sources. Knowing which to use in each situation is critical for safety and effectiveness. Businesses and households must ensure the right types are available and accessible.",
  image: PicturePlaceholder,
  category: "Education",
  date: "May 1, 2023",
  readTime: "6 min"
},
{
  title: "Top Fire Safety Trends in 2025",
  content: "The industry is shifting toward predictive safety using smart analytics and AI. Fire safety tech now integrates with smart homes and industrial IoT, offering real-time data to prevent hazards before ignition occurs.",
  image: PicturePlaceholder,
  category: "Technology",
  date: "April 20, 2023",
  readTime: "5 min"
},
{
  title: "The Role of FDAS in Modern Infrastructure",
  content: "Fire Detection and Alarm Systems (FDAS) are now integral to commercial and residential infrastructure. These systems offer early warning and improve emergency response coordination, saving both time and lives.",
  image: PicturePlaceholder,
  category: "Commercial",
  date: "April 10, 2023",
  readTime: "6 min"
},
{
  title: "Solar Power and Fire Risk: What You Should Know",
  content: "Solar panels are safe when installed and maintained properly, but poor wiring and faulty inverters can pose fire hazards. Learn best practices to mitigate risks and keep your renewable energy source safe.",
  image: PicturePlaceholder,
  category: "Sustainability",
  date: "March 30, 2023",
  readTime: "5 min"
},
{
  title: "What to Expect During a Fire Safety Inspection",
  content: "Understanding the inspection process can help your home or business remain compliant. Inspectors check for alarms, extinguisher accessibility, wiring issues, and code violations. Preparation can save time and avoid fines.",
  image: PicturePlaceholder,
  category: "Compliance",
  date: "March 18, 2023",
  readTime: "4 min"
},
{
  title: "How to Maintain Your Fire Suppression System",
  content: "From sprinkler heads to clean agent tanks, regular testing and cleaning are essential. This article outlines a monthly, quarterly, and annual maintenance checklist for business owners and facility managers.",
  image: PicturePlaceholder,
  category: "Maintenance",
  date: "March 2, 2023",
  readTime: "6 min"
},
{
  title: "Common Fire Hazards in the Workplace",
  content: "Loose wiring, blocked exits, and improper storage of flammable materials are just a few risks found in commercial spaces. Mitigation begins with staff training and a robust safety plan.",
  image: PicturePlaceholder,
  category: "Workplace Safety",
  date: "February 15, 2023",
  readTime: "5 min"
},
{
  title: "CCTV Integration for Fire Incident Analysis",
  content: "Integrating CCTV with fire alarm systems allows for post-incident review and helps identify root causes. Advanced systems can even auto-detect smoke or flame through video analytics.",
  image: PicturePlaceholder,
  category: "Technology",
  date: "January 30, 2023",
  readTime: "6 min"
},
{
  title: "Fire Safety for LGU Buildings and Public Spaces",
  content: "Municipal and government buildings must meet stringent safety standards. Learn how LGUs can equip public facilities with solar-powered alarms, street lighting, and community fire awareness programs.",
  image: PicturePlaceholder,
  category: "Public Safety",
  date: "January 10, 2023",
  readTime: "7 min"
},
{
  title: "The Importance of Fire Safety Training in Schools",
  content: "Children and school staff should undergo annual drills and training. Early education on fire hazards and safe behavior in emergencies can significantly reduce injury and panic during real events.",
  image: PicturePlaceholder,
  category: "Education",
  date: "December 20, 2022",
  readTime: "5 min"
}
];

export const safetyTips: SafetyTip[] = [
 {
  title: "Proper Storage of Flammable Materials",
  content: "Store chemicals and flammable liquids in designated, ventilated containers.\nKeep them away from heat sources and electrical panels.\nLabel all containers clearly and restrict access to trained personnel only.",
  category: "Fire Prevention",
  additionalInfo: "Follow local fire codes regarding quantity and distance regulations."
},
{
  title: "Safe Use of Fireworks",
  content: "Use fireworks only outdoors and away from structures.\nNever relight a ‘dud’ firework.\nKeep water or an extinguisher nearby.\nSupervise children at all times when fireworks are present.",
  category: "Fire Prevention",
  additionalInfo: "Check local laws to ensure fireworks use is permitted."
},
{
  title: "Space Heater Safety",
  content: "Keep space heaters at least 3 feet away from flammable materials.\nAlways turn off heaters when leaving the room or sleeping.\nUse models with automatic shut-off features.",
  category: "Home Safety",
  additionalInfo: "Never plug space heaters into extension cords or power strips."
},
{
  title: "Using Fire Blankets Effectively",
  content: "Place the blanket over the fire, covering it completely to cut off oxygen.\nUse for pan fires or to wrap around a person whose clothes are on fire.\nReplace after one use.",
  category: "Emergency Response",
  additionalInfo: "Fire blankets should be stored in accessible and visible locations."
},
{
  title: "Pet Fire Safety",
  content: "Keep pets away from open flames or stoves.\nSecure candles and fireplaces.\nConsider fire safety stickers to alert rescuers of pets inside your home.",
  category: "Home Safety",
  additionalInfo: "Include pets in your fire escape drills."
},
{
  title: "Holiday Decoration Fire Risks",
  content: "Inspect lights for frayed wires or broken bulbs.\nTurn off decorative lights before bed.\nKeep real trees watered to prevent dryness and fire hazards.",
  category: "Seasonal Safety",
  additionalInfo: "Avoid overloading outlets with multiple holiday items."
},
{
  title: "Grilling Safety Tips",
  content: "Keep grills at least 10 feet from buildings and railings.\nClean grease buildup regularly.\nNever grill indoors or in enclosed areas.",
  category: "Fire Prevention",
  additionalInfo: "Check gas lines and connections before each use."
},
{
  title: "Handling Fire Emergencies in Vehicles",
  content: "Stop the car, turn off the engine, and exit immediately.\nDo not open the hood if smoke is visible.\nKeep a compact fire extinguisher in your car at all times.",
  category: "Vehicle Safety",
  additionalInfo: "Call emergency services—do not attempt to fight large fires."
},
{
  title: "Fire Drill Best Practices",
  content: "Conduct drills at varied times to simulate real emergencies.\nUse clear signals and account for all participants post-drill.\nDocument findings and improve procedures continuously.",
  category: "Emergency Preparedness",
  additionalInfo: "Assign roles such as fire wardens for organized evacuations."
},
{
  title: "Understanding Fire Extinguisher Classes",
  content: "Class A: Ordinary combustibles\nClass B: Flammable liquids\nClass C: Electrical fires\nClass D: Metals\nClass K: Kitchen fires\nKnow the class before attempting to extinguish.",
  category: "Education",
  additionalInfo: "Every extinguisher label includes pictograms for proper identification."
}

];