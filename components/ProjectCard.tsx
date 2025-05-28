import React from 'react';

type Props = {
  title: string;
  description: string;
  liveLink: string;
  githubLink: string;
};

const ProjectCard = ({ title, description, liveLink, githubLink }: Props) => {
  return (
    <div className="border rounded-lg shadow-md p-6 bg-white hover:shadow-lg transition">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex space-x-4">
        <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          Live App
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:underline">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
