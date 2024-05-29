import React, { createContext, useState } from 'react';

export const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [targets, setTargets] = useState([]);
  const [categories, setCategories] = useState(['Work', 'Personal', 'Health']);

  const addProject = (name) => {
    const newProject = { id: projects.length + 1, name };
    setProjects([...projects, newProject]);
  };

  const addTarget = (projectId, text, category) => {
    const newTarget = { id: targets.length + 1, projectId, text, category, completed: false };
    setTargets([...targets, newTarget]);
  };

  const completeTarget = (targetId) => {
    setTargets(targets.map(target =>
      target.id === targetId ? { ...target, completed: !target.completed } : target
    ));
  };

  const getProjectStats = (projectId) => {
    const projectTargets = targets.filter(target => target.projectId === projectId);
    const completedTargets = projectTargets.filter(target => target.completed).length;
    const totalTargets = projectTargets.length;
    const completionRate = totalTargets > 0 ? (completedTargets / totalTargets) * 100 : 0;
    return { completedTargets, totalTargets, completionRate };
  };

  const getOverallStats = () => {
    const completedTargets = targets.filter(target => target.completed).length;
    const totalTargets = targets.length;
    const completionRate = totalTargets > 0 ? (completedTargets / totalTargets) * 100 : 0;
    return { completedTargets, totalTargets, completionRate };
  };

  const getCategoryStats = () => {
    return categories.map(category => {
      const categoryTargets = targets.filter(target => target.category === category);
      const completedTargets = categoryTargets.filter(target => target.completed).length;
      const totalTargets = categoryTargets.length;
      const completionRate = totalTargets > 0 ? (completedTargets / totalTargets) * 100 : 0;
      return { category, completedTargets, totalTargets, completionRate };
    });
  };

  return (
    <ProjectContext.Provider value={{ projects, targets, categories, addProject, addTarget, completeTarget, getProjectStats, getOverallStats, getCategoryStats }}>
      {children}
    </ProjectContext.Provider>
  );
};

export { ProjectProvider };
