import React, { useState, useContext } from 'react';
import './css/projects.css';
import project from './../../images/project.png';
import Layout from '../../Layout';
import decor from './../../images/dekor.png';
import { ProjectContext } from '../../context/ProjectContext';

const Projects = () => {
  const { projects, addProject } = useContext(ProjectContext);
  const [newProjectName, setNewProjectName] = useState('');

  const handleAddProject = () => {
    if (newProjectName.trim()) {
      addProject(newProjectName);
      setNewProjectName('');
    }
  };

  return (
    <Layout>
      <div className='projects_block'>
        <div className="container">
          <div className="project_content">
            <h2>Проекты</h2>
            <div className="project_items_block">
              {projects.map((project) => (
                <div key={project.id} className="common_item">
                  <div className="round orange"></div>
                  <input type="text" value={project.name} readOnly />
                </div>
              ))}
            </div>
            <div className="common_item">
              <input 
                type="text" 
                placeholder="Название проекта" 
                value={newProjectName}
                onChange={(e) => setNewProjectName(e.target.value)}
              />
            </div>
            <button className='common_button' onClick={handleAddProject}>Добавить проект</button>
          </div>
          <div className="image">
            <img src={project} alt="" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
