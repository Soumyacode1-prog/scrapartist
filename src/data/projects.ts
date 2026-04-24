
import { Project } from './types';
import { photographyProjects } from './photography-projects';
import { videoProjects } from './video-projects';
import { installationProjects } from './installation-projects';
import { performanceProjects } from './performance-projects';
import { performanceInstallationProjects } from './performance-installation-projects';
import { generativeArtProjects } from './generative-art-projects';
import { iluminaVideoProjects } from './ilumina-video-projects';

// Combine all projects - video projects now come before photography
// Note: iluminaVideoProjects are excluded from the main projects array
// They are only used on the Ilumina page
export const projects: Project[] = [
  ...videoProjects,
  ...photographyProjects,
  ...installationProjects,
  ...performanceProjects,
  ...performanceInstallationProjects,
  ...generativeArtProjects
];

// All projects including Ilumina-specific ones
export const allProjectsIncludingIlumina: Project[] = [
  ...projects,
  ...iluminaVideoProjects
];

// Helper functions
export const getProjectBySlug = (slug: string): Project | undefined => {
  // Search in all projects including Ilumina-specific ones
  return allProjectsIncludingIlumina.find(project => project.slug === slug);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.isFeatured).slice(0, 6);
};

// Re-export the Project type for convenience
export type { Project };
