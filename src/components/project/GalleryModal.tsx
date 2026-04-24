
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
      <DialogContent className="max-w-6xl p-0 bg-black/90 border-none">
        <div className="absolute right-4 top-4 z-10 flex gap-2">
          <Link to="/" className="rounded-full bg-black/50 p-2 text-white hover:bg-black/70">
            <Home className="h-5 w-5" />
            <span className="sr-only">Back to home</span>
          </Link>
          <DialogClose className="rounded-full bg-black/50 p-2 text-white hover:bg-black/70">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </div>
        
        <div className="h-16 bg-black/80"></div>
        
        <div className="relative flex items-center justify-center w-full h-full min-h-[50vh] max-h-[70vh] py-4 px-4">
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
