
import React, { useState, useEffect } from 'react';
import { Project } from '../data/types';
import MediaRenderer from './project/MediaRenderer';
import ProjectThumbnails from './project/ProjectThumbnails';
import ProjectGallery from './project/ProjectGallery';
import ProjectInfo from './project/ProjectInfo';
import GalleryModal from './project/GalleryModal';

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [imageOrientation, setImageOrientation] = useState<'landscape' | 'portrait'>('landscape');
  
  useEffect(() => {
    setSelectedImageIndex(0);
    setIsLoading(true);
    setGalleryOpen(false);
  }, [project.id]);
  
  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    setImageOrientation(img.naturalWidth >= img.naturalHeight ? 'landscape' : 'portrait');
    setIsLoading(false);
  };

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  const navigateToPrevImage = () => {
    if (project.images && project.images.length > 0) {
      setSelectedImageIndex((prevIndex) => 
        prevIndex === 0 ? project.images!.length - 1 : prevIndex - 1
      );
      setIsLoading(true);
    }
  };

  const navigateToNextImage = () => {
    if (project.images && project.images.length > 0) {
      setSelectedImageIndex((prevIndex) => 
        prevIndex === project.images!.length - 1 ? 0 : prevIndex + 1
      );
      setIsLoading(true);
    }
  };
  
  const openGallery = (index: number) => {
    setGalleryIndex(index);
    setGalleryOpen(true);
  };

  const navigatePrevGallery = () => {
    if (project.images && project.images.length > 0) {
      setGalleryIndex((prevIndex) => 
        prevIndex === 0 ? project.images!.length - 1 : prevIndex - 1
      );
    }
  };

  const navigateNextGallery = () => {
    if (project.images && project.images.length > 0) {
      setGalleryIndex((prevIndex) => 
        prevIndex === project.images!.length - 1 ? 0 : prevIndex + 1
      );
    }
  };
  
  return (
    <div className="animate-fade-in">
      <div className="mb-10">
        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-wider mb-4">
          {project.title}
        </h1>
        <p className="font-body text-lg text-white/80 max-w-3xl">
          {project.description}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <MediaRenderer
            project={project}
            selectedImageIndex={selectedImageIndex}
            isLoading={isLoading}
            imageOrientation={imageOrientation}
            onImageLoad={handleImageLoad}
            onVideoLoad={handleVideoLoad}
            onPrevImage={navigateToPrevImage}
            onNextImage={navigateToNextImage}
            onImageClick={() => openGallery(selectedImageIndex)}
          />
          
          {!project.youtubeIds && !project.youtubeId && (
            <ProjectThumbnails
              project={project}
              selectedImageIndex={selectedImageIndex}
              onThumbnailClick={setSelectedImageIndex}
              onGalleryOpen={openGallery}
            />
          )}
          
          <ProjectGallery
            project={project}
            onImageClick={openGallery}
          />
        </div>
        
        <ProjectInfo project={project} />
      </div>

      <GalleryModal
        project={project}
        galleryOpen={galleryOpen}
        galleryIndex={galleryIndex}
        onOpenChange={setGalleryOpen}
        onPrevImage={navigatePrevGallery}
        onNextImage={navigateNextGallery}
        onImageSelect={setGalleryIndex}
      />
    </div>
  );
};

export default ProjectDetail;
