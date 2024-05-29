import React, { useContext, useState, useEffect } from 'react';
import './css/targets.css';
import Layout from '../../Layout';
import { ProjectContext } from '../../context/ProjectContext';

const Targets = () => {
    const { projects, targets, categories, addTarget } = useContext(ProjectContext);
    const [selectedProjectId, setSelectedProjectId] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [inputFields, setInputFields] = useState([]);
    const [filteredTargets, setFilteredTargets] = useState([]);

    useEffect(() => {
        if (selectedProjectId && selectedCategory) {
            const projectTargets = targets.filter(
                target => target.projectId === selectedProjectId && target.category === selectedCategory
            );
            setFilteredTargets(projectTargets);
        } else {
            setFilteredTargets([]);
        }
    }, [selectedProjectId, selectedCategory, targets]);

    const handleProjectChange = (event) => {
        setSelectedProjectId(parseInt(event.target.value));
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleAddField = () => {
        setInputFields([...inputFields, '']);
    };

    const handleInputChange = (index, event) => {
        const newInputFields = [...inputFields];
        newInputFields[index] = event.target.value;
        setInputFields(newInputFields);
    };

    const handleSaveTargets = () => {
        if (selectedProjectId && selectedCategory && inputFields.length > 0) {
            inputFields.forEach((text, index) => {
                addTarget(selectedProjectId, text, selectedCategory);
            });
            setInputFields([]);
        }
    };

    return (
        <Layout>
            <div className="targets_block">
                <div className="container">
                    <div className="target_content">
                        <h2>Цели</h2>
                        <div className="common_item no_shadow">
                            <select onChange={handleProjectChange} value={selectedProjectId || ''}>
                                <option value="" disabled>Выберите проект</option>
                                {projects.map(project => (
                                    <option key={project.id} value={project.id}>{project.name}</option>
                                ))}
                            </select>
                        </div>
                        <br>
                        </br>
                        <div className="common_item no_shadow">
                            <select onChange={handleCategoryChange} value={selectedCategory || ''}>
                                <option value="" disabled>Выберите категорию</option>
                                {categories.map(category => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>
                        <div className="target_items_block">
                            {filteredTargets.map(target => (
                                <div key={target.id} className="common_item">
                                    <input
                                        type="text"
                                        value={target.text}
                                        readOnly
                                    />
                                </div>
                            ))}
                            {inputFields.map((field, index) => (
                                <div key={index} className="common_item">
                                    <input
                                        type="text"
                                        placeholder="Введите цель"
                                        value={field}
                                        onChange={(event) => handleInputChange(index, event)}
                                    />
                                </div>
                            ))}
                        </div>
                        <button className="common_button" onClick={handleAddField}>
                            Добавить цель
                        </button>
                        <br>
                        </br>
                        <br>
                        </br>
                        <button className="common_button" onClick={handleSaveTargets}>
                            Сохранить все цели
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Targets;
