
import React from 'react';
import { Project } from '../../data/types';
import { Button } from '../ui/button';

interface ProjectGalleryProps {
  project: Project;
  onImageClick: (index: number) => void;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  project,
  onImageClick
}) => {
  // Determine if we should use horizontal scroll (for projects with many images like RMC)
  const useHorizontalScroll = project.images && project.images.length > 15;
  
  if (project.youtubeIds && project.youtubeIds.length > 0 && project.images && project.images.length > 0) {
    if (useHorizontalScroll) {
      return (
        <div className="mt-12">
          <h3 className="font-display text-xl tracking-wider mb-6">Installation Views</h3>
          <div className="overflow-x-auto pb-4 -mx-4 px-4">
            <div className="flex gap-4 min-w-max">
              {project.images.map((image, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-96 h-64 overflow-hidden cursor-pointer"
                  onClick={() => onImageClick(index)}
                >
                  <img 
                    src={image} 
                    alt={`${project.title} view ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <Button 
              variant="outline" 
              onClick={() => onImageClick(0)}
              className="text-sm font-body tracking-wider border-white/30 hover:border-white hover:bg-white/5"
            >
              Gallery View
            </Button>
          </div>
        </div>
      );
    }
    
    return (
      <div className="mt-12">
        <h3 className="font-display text-xl tracking-wider mb-6">Installation Views</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.images.map((image, index) => (
            <div 
              key={index} 
              className="overflow-hidden cursor-pointer"
              onClick={() => onImageClick(index)}
            >
              <img 
                src={image} 
                alt={`${project.title} view ${index + 1}`} 
                className="w-full h-auto transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
        
        <div className="mt-4 text-center">
          <Button 
            variant="outline" 
            onClick={() => onImageClick(0)}
            className="text-sm font-body tracking-wider border-white/30 hover:border-white hover:bg-white/5"
          >
            Gallery View
          </Button>
        </div>
      </div>
    );
  }
  
  if (project.youtubeId && project.images && project.images.length > 0) {
    if (useHorizontalScroll) {
      return (
        <div className="mt-12">
          <h3 className="font-display text-xl tracking-wider mb-6">Gallery</h3>
          <div className="overflow-x-auto pb-4 -mx-4 px-4">
            <div className="flex gap-4 min-w-max">
              {project.images.map((image, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-96 h-64 overflow-hidden cursor-pointer"
                  onClick={() => onImageClick(index)}
                >
                  <img 
                    src={image} 
                    alt={`${project.title} view ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <Button 
              variant="outline" 
              onClick={() => onImageClick(0)}
              className="text-sm font-body tracking-wider border-white/30 hover:border-white hover:bg-white/5"
            >
              Gallery View
            </Button>
          </div>
        </div>
      );
    }
    
    return (
      <div className="mt-12">
        <h3 className="font-display text-xl tracking-wider mb-6">Gallery</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.images.map((image, index) => (
            <div 
              key={index} 
              className="overflow-hidden cursor-pointer"
              onClick={() => onImageClick(index)}
            >
              <img 
                src={image} 
                alt={`${project.title} view ${index + 1}`} 
                className="w-full h-auto transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
        
        <div className="mt-4 text-center">
          <Button 
            variant="outline" 
            onClick={() => onImageClick(0)}
            className="text-sm font-body tracking-wider border-white/30 hover:border-white hover:bg-white/5"
          >
            Gallery View
          </Button>
        </div>
      </div>
    );
  }
  
  return null;
};

export default ProjectGallery;
