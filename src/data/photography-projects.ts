
import { Project } from './types';

const allWebsiteImages = [
  "3deer1", "3deer2", "3deer3", "5g1", "5g2",
  "birsa1", "birsa2", "birsa3", "birsa4", "birsa5", "birsa6", "birsa7", "birsa8",
  "cmpdi1", "cmpdi2", "cmpdi3", "cmpdi4", "cmpdi5", "cmpdi7", "cmpdi8", "cmpdi9", "cmpdi11", "cmpdi12", "cmpdi13", "cmpdi14", "cmpdi15",
  "front1", "front2", "front3", "front4", "front6",
  "image", "image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10", "image11", "image12", "image13",
  "logo1", "logo2", "logo3", "logo4", "logo5", "logo6", "logo7", "logo8", "logo9", "logo10", "logo11",
  "m112", "m113", "m114", "mii1",
  "nhai1", "nhai2", "nhai3", "nhai4",
  "rmc3", "rmc4", "rmc5", "rmc6", "rmc7", "rmc8", "rmc9", "rmc10", "rmc11", "rmc12", "rmc13", "rmc14", "rmc15", "rmc16", "rmc17", "rmc18", "rmc20", "rmc21", "rmc22", "rmc23", "rmc24", "rmc25", "rmc26", "rmc27",
  "shivam1", "shivam2"
].map((name) => `/lovable-uploads/${name}.png`);

export const photographyProjects: Project[] = [{
  id: 101,
  title: "COMPLETE SCRAP ART IMAGE ARCHIVE",
  slug: "complete-scrap-art-image-archive",
  category: ["photography"],
  thumbnail: "/lovable-uploads/shivam1.png",
  images: allWebsiteImages,
  description: "A complete visual archive containing all images used across the Scrap Artist website.",
  date: "2025",
  location: "Ranchi, Jharkhand, India",
  isFeatured: true,
  details: "Browse the full collection of project, installation, sculpture, portrait, and studio images used throughout the website."
}];
