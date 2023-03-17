import React from 'react';
import Blubs from './Blubs';
export default function Main({ title }) {
  const items = ['New Project'];
  const newProjects = [
    'Project1',
    'Project2',
    'Project3',
    'Project4',
    'Project5',
    'Project6',
    'Project7',
    'Project8',
  ];
  return (
    <div>
      <h5>{title}</h5>
      <div className="projects">
        <Blubs items={items} />
        <Blubs items={newProjects} />
      </div>
    </div>
  );
}
