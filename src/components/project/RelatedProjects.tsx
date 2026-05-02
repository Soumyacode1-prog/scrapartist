
import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../../data/types';

interface RelatedProjectsProps {
  currentProject: Project;
  allProjects: Project[];
}

const RelatedProjects: React.FC<RelatedProjectsProps> = ({ currentProject, allProjects }) => {
  // Get other projects excluding the current one
  const relatedProjects = allProjects.filter(project => project.id !== currentProject.id).slice(0, 6);

  if (relatedProjects.length === 0) return null;

  return (
    <div className="mt-16 pt-8 border-t border-white/10">
      <h3 className="font-display text-xl tracking-wider mb-8">
        More Projects
      </h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {relatedProjects.map((project) => (
          <Link 
            key={project.id}
            to={`/projects/${project.slug}`}
            className="group block transition-all duration-300 hover:scale-105"
          >
            <div className="relative overflow-hidden aspect-square">
              <img 
                src={project.thumbnail} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute inset-0 p-3 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <h4 className="font-display text-sm tracking-wider text-white">
                  {project.title}
                </h4>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedProjects;
