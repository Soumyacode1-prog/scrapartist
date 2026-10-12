
import { Project } from './types';

const installationVideos = [
  ["GDPagDMeYzg", "INSTALLATION VIDEO 01"],
  ["LO1NE7cgpoY", "INSTALLATION VIDEO 02"],
  ["WjvZsrQIuNc", "INSTALLATION VIDEO 03"],
  ["v6MZYz6QPLY", "INSTALLATION VIDEO 04"],
  ["nP_vlXQKbn4", "INSTALLATION VIDEO 05"],
  ["UzyDaCB0cRk", "INSTALLATION VIDEO 06"],
  ["F02mFToauSw", "INSTALLATION VIDEO 07"],
  ["yg7wGIh6bl4", "INSTALLATION VIDEO 08"],
  ["H9z115Dxpo8", "INSTALLATION VIDEO 09"],
  ["up1EOyQga_U", "INSTALLATION VIDEO 10"],
  ["H9IvwZIKW3g", "INSTALLATION VIDEO 11"],
  ["FKmQCWmzgGI", "INSTALLATION VIDEO 12"],
  ["kWDrHsq7a5s", "INSTALLATION VIDEO 13"],
  ["J1BeLPh25HA", "INSTALLATION VIDEO 14"],
  ["vnMHx_IlffY", "INSTALLATION VIDEO 15"],
  ["Ny4VHhGUk5A", "INSTALLATION VIDEO 16"],
  ["UafjGmG6Y_g", "INSTALLATION VIDEO 17"],
  ["ntAYxhflisQ", "INSTALLATION VIDEO 18"]
] as const;

export const installationProjects: Project[] = installationVideos.map(([youtubeId, title], index) => ({
  id: 201 + index,
  title,
  slug: `installation-video-${index + 1}`,
  category: ["installation"],
  thumbnail: "/lovable-uploads/image2.png",
  youtubeId,
  description: "Installation video from the Scrap Artist archive.",
  date: "2025",
  location: "Ranchi, Jharkhand, India",
  isFeatured: true,
  showCategory: false,
  details: "Installation documentation shared by Shivam Singh."
}));
