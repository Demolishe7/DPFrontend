import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import './css/style.css';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Targets from './pages/targets/Targets';
import SignIn from './pages/sign_in/SignIn';
import Register from './pages/register/Register'; // Импортируем компонент Register
import Statistic from './pages/statistic/Statistic';
import Tape from './pages/tape/Tape';
import { ProjectProvider } from './context/ProjectContext';

const App = () => {
    return (
        <ProjectProvider>
            <div>
                <Router>
                    <ScrollToTop />
                    <Routes>
                        <Route path='/' element={<Home/>} /> {/* Устанавливаем Register как начальную страницу */}
                        <Route path='/home' element={<Home />} />
                        <Route path='/projects' element={<Projects />} />
                        <Route path='/targets' element={<Targets />} />
                        <Route path='/sign_in' element={<SignIn />} />
                        <Route path='/statistic' element={<Statistic />} />
                        <Route path='/tape' element={<Tape />} />
                    </Routes>
                </Router>
            </div>
        </ProjectProvider>
    );
};

export default App;
