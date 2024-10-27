import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MuscleMenu from './components/MuscleMenu';
import MuscleDetail from './components/MuscleDetail';
import './styles/styles.css'; 

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MuscleMenu />} />
                <Route path="/muscle/:muscleName" element={<MuscleDetail />} />
            </Routes>
        </Router>
    );
};

export default App;