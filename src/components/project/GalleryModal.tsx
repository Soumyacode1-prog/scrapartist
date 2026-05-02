
import React from 'react';
import { Project } from '../../data/types';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogClose } from '../ui/dialog';
import { ChevronLeft, ChevronRight, X, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface GalleryModalProps {
  project: Project;
  galleryOpen: boolean;
  galleryIndex: number;
  onOpenChange: (open: boolean) => void;
  onPrevImage: () => void;
  onNextImage: () => void;
  onImageSelect: (index: number) => void;
}

const GalleryModal: React.FC<GalleryModalProps> = ({
  project,
  galleryOpen,
  galleryIndex,
  onOpenChange,
  onPrevImage,
  onNextImage,
  onImageSelect
}) => {
  return (
    <Dialog open={galleryOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl w-screen max-h-[90vh] p-0 bg-black/95 border-none flex flex-col">
        <div className="absolute right-6 top-6 z-50 flex gap-3 pointer-events-auto">
          <Link to="/" className="flex items-center justify-center rounded-full bg-black/60 p-2.5 text-white hover:bg-black/80 transition-colors" title="Back to home">
            <Home className="h-6 w-6" />
            <span className="sr-only">Back to home</span>
          </Link>
          <DialogClose className="flex items-center justify-center rounded-full bg-black/60 p-2.5 text-white hover:bg-black/80 transition-colors" title="Close gallery">
            <X className="h-6 w-6" />
            <span className="sr-only">Close gallery</span>
          </DialogClose>
        </div>
        
        <div className="relative flex items-center justify-center flex-1 w-full min-h-[60vh] py-8 px-6">
          {project.images && (
            <img 
              src={project.images[galleryIndex]} 
              alt={`${project.title} view ${galleryIndex + 1}`} 
              className="max-h-full max-w-full object-contain"
            />
          )}
          
          {project.images && project.images.length > 1 && (
            <>
              <Button 
                variant="outline" 
                size="icon" 
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 hover:bg-black/90 border-0 z-40 pointer-events-auto"
                onClick={onPrevImage}
                title="Previous image"
              >
                <ChevronLeft className="h-8 w-8" />
                <span className="sr-only">Previous image</span>
              </Button>
              
              <Button 
                variant="outline" 
                size="icon" 
                className="absolute right-20 top-1/2 -translate-y-1/2 rounded-full bg-black/60 hover:bg-black/90 border-0 z-40 pointer-events-auto"
                onClick={onNextImage}
                title="Next image"
              >
                <ChevronRight className="h-8 w-8" />
                <span className="sr-only">Next image</span>
              </Button>
            </>
          )}
        </div>
        
        {project.images && project.images.length > 1 && (
          <div className="p-4 bg-black/80">
            <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => onImageSelect(index)}
                  className={`relative flex-shrink-0 w-full h-20 overflow-hidden rounded-md transition-all duration-300 ${
                    index === galleryIndex ? 'ring-2 ring-white/80' : 'opacity-50 hover:opacity-80'
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
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default GalleryModal;
