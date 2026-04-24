
import React from 'react';
import { Project } from '../../data/types';
import { Button } from '../ui/button';

interface ProjectThumbnailsProps {
  project: Project;
  selectedImageIndex: number;
  onThumbnailClick: (index: number) => void;
  onGalleryOpen: (index: number) => void;
}

const ProjectThumbnails: React.FC<ProjectThumbnailsProps> = ({
  project,
  selectedImageIndex,
  onThumbnailClick,
  onGalleryOpen
}) => {
  if (!project.images || project.images.length <= 1) return null;
  
  return (
    <div className="mt-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {project.images.map((image, index) => (
          <button
            key={index}
            onClick={() => {
              onThumbnailClick(index);
              onGalleryOpen(index);
            }}
            className={`relative flex-shrink-0 w-full h-32 md:h-40 overflow-hidden transition-all duration-300 cursor-pointer hover:opacity-80 ${
              index === selectedImageIndex ? 'ring-2 ring-white/80' : 'opacity-70'
            }`}
          >
            <img 
              src={image} 
              alt={`${project.title} thumbnail ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <Button 
          variant="outline" 
          onClick={() => onGalleryOpen(selectedImageIndex)}
          className="text-sm font-body tracking-wider border-white/30 hover:border-white hover:bg-white/5"
        >
          Gallery View
        </Button>
      </div>
    </div>
  );
};

export default ProjectThumbnails;
