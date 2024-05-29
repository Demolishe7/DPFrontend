import React, { useContext, useState, useEffect } from 'react';
import Layout from '../../Layout';
import { ProjectContext } from '../../context/ProjectContext';
import './css/statistic.css';

const Statistic = () => {
    const { projects, targets, getProjectStats, getOverallStats, getCategoryStats, completeTarget } = useContext(ProjectContext);
    const [visibleProjectId, setVisibleProjectId] = useState(null);

    useEffect(() => {
        console.log('Projects:', projects);
        console.log('Targets:', targets);
    }, [projects, targets]);

    const handleShowTargetsClick = (projectId) => {
        console.log(`Clicked project ID: ${projectId}`);
        setVisibleProjectId(visibleProjectId === projectId ? null : projectId);
    };

    const handleCompleteTarget = (targetId) => {
        completeTarget(targetId);
    };

    const overallStats = getOverallStats();
    const categoryStats = getCategoryStats();

    return (
        <Layout>
            <div className='statistic_block'>
                <div className="container">
                    <h2>Общий Прогресс</h2>
                    <div className="overall_stats">
                        <p>Завершенные цели: {overallStats.completedTargets} из {overallStats.totalTargets}</p>
                        <p>Процент выполнения: {overallStats.completionRate.toFixed(2)}%</p>
                    </div>
                    <h2>Статистика по проектам</h2>
                    {projects.map((project) => {
                        const projectStats = getProjectStats(project.id);
                        return (
                            <div key={project.id} className="project_block">
                                <h3>{project.name}</h3>
                                <button onClick={() => handleShowTargetsClick(project.id)}>Показать цели</button>
                                {visibleProjectId === project.id && (
                                    <ul>
                                        {targets.filter(target => target.projectId === project.id).map(target => (
                                            <li key={target.id} className="target_item">
                                                <input 
                                                    type="checkbox" 
                                                    checked={target.completed} 
                                                    onChange={() => handleCompleteTarget(target.id)} 
                                                />
                                                {target.text} {target.completed ? "(Completed)" : ""}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                <div className="stats">
                                    <p>Завершенные цели: {projectStats.completedTargets} из {projectStats.totalTargets}</p>
                                    <p>Процент выполнения: {projectStats.completionRate.toFixed(2)}%</p>
                                </div>
                            </div>
                        );
                    })}
                    <h2>Статистика по категориям</h2>
                    {categoryStats.map((stat) => (
                        <div key={stat.category} className="category_block">
                            <h3>{stat.category}</h3>
                            <p>Завершенные цели: {stat.completedTargets} из {stat.totalTargets}</p>
                            <p>Процент выполнения: {stat.completionRate.toFixed(2)}%</p>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Statistic;
