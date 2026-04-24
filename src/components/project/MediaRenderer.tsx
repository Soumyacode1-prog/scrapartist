
import React from 'react';
import { Project } from '../../data/types';
import { AspectRatio } from '../ui/aspect-ratio';
import { Button } from '../ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MediaRendererProps {
  project: Project;
  selectedImageIndex: number;
  isLoading: boolean;
  imageOrientation: 'landscape' | 'portrait';
  onImageLoad: (e: React.SyntheticEvent<HTMLImageElement>) => void;
  onVideoLoad: () => void;
  onPrevImage: () => void;
  onNextImage: () => void;
  onImageClick: () => void;
}

const MediaRenderer: React.FC<MediaRendererProps> = ({
  project,
  selectedImageIndex,
  isLoading,
  imageOrientation,
  onImageLoad,
  onVideoLoad,
  onPrevImage,
  onNextImage,
  onImageClick
}) => {
  if (project.youtubeIds && project.youtubeIds.length > 0) {
    return (
      <div className="space-y-8">
        {project.youtubeIds.map((youtubeId, index) => (
          <div key={index} className="relative overflow-hidden">
            <AspectRatio ratio={16/9}>
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}`}
                title={`${project.title} - Video ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              ></iframe>
            </AspectRatio>
          </div>
        ))}
      </div>
    );
  } else if (project.youtubeId) {
    return (
      <div className="relative overflow-hidden">
        <AspectRatio ratio={16/9}>
          <iframe
            src={`https://www.youtube.com/embed/${project.youtubeId}`}
            title={project.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          ></iframe>
        </AspectRatio>
      </div>
    );
  } else if (project.images && project.images.length > 0) {
    return (
      <div className="relative overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
            <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
          </div>
        )}
        
        {project.images.length > 1 && (
          <>
            <Button 
              variant="outline" 
              size="icon" 
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 hover:bg-black/50 border-0 z-10"
              onClick={onPrevImage}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous image</span>
            </Button>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 hover:bg-black/50 border-0 z-10"
              onClick={onNextImage}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next image</span>
            </Button>
          </>
        )}
        
        <div className="flex justify-center cursor-pointer" onClick={onImageClick}>
          <img 
            src={project.images[selectedImageIndex]} 
            alt={project.title} 
            className={`transition-opacity duration-500 ${
              imageOrientation === 'portrait' 
                ? 'max-h-[80vh] h-auto w-auto object-contain' 
                : 'w-full h-auto'
            }`}
            style={{ opacity: isLoading ? 0.5 : 1 }}
            onLoad={onImageLoad}
          />
        </div>
      </div>
    );
  } else if (project.videos && project.videos.length > 0) {
    return (
      <div className="relative overflow-hidden aspect-video">
        <video 
          src={project.videos[0]} 
          controls
          poster={project.thumbnail}
          className="w-full h-full object-cover"
          onLoadedData={onVideoLoad}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    );
  } else {
    return (
      <div className="relative overflow-hidden">
        <img 
          src={project.thumbnail} 
          alt={project.title} 
          className="w-full h-auto"
          onLoad={onImageLoad}
        />
      </div>
    );
  }
};

export default MediaRenderer;
