
import React from 'react';
import { Project } from '../../data/types';

interface ProjectInfoProps {
  project: Project;
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({ project }) => {
  const formatCategory = (category: string) => {
    return category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };
  
  const formattedCategories = project.category.map(formatCategory).join(', ');

  return (
    <div className="glass-card p-8 self-start">
      <div className="mb-8">
        <h3 className="font-display text-lg tracking-wider mb-4">PROJECT DETAILS</h3>
        <p className="font-body text-white/80 whitespace-pre-line">{project.details}</p>
      </div>
      
      <div className="border-t border-white/10 pt-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-body text-sm text-white/60 mb-1">Category</h4>
            <p className="font-body">{formattedCategories}</p>
          </div>
          <div>
            <h4 className="font-body text-sm text-white/60 mb-1">Date</h4>
            <p className="font-body">{project.date}</p>
          </div>
          {project.client && (
            <div>
              <h4 className="font-body text-sm text-white/60 mb-1">Client</h4>
              <p className="font-body">{project.client}</p>
            </div>
          )}
          {project.location && (
            <div>
              <h4 className="font-body text-sm text-white/60 mb-1">Location</h4>
              <p className="font-body">{project.location}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
