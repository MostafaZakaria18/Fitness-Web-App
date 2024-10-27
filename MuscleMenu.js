import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import chestImage from './images/chest.jpg';
import backImage from './images/back.jpg';
import legsImage from './images/legs.jpg';
import armsImage from './images/arms.jpg';
import shouldersImage from './images/shoulders.jpg';
import placeholderImage from './images/placeholder.jpg';

const muscles = [
    { name: 'Chest', image: chestImage },
    { name: 'Back', image: backImage },
    { name: 'Legs', image: legsImage },
    { name: 'Arms', image: armsImage },
    { name: 'Shoulders', image: shouldersImage },
];

const MuscleMenu = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleMuscleClick = (muscle) => {
        navigate(`/muscle/${muscle.name.toLowerCase()}`);
    };

    const filteredMuscles = muscles.filter(muscle =>
        muscle.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    );

    return (
        <div className="muscle-menu">
            <h2>Select a Muscle Group to Train</h2>
            <input
                type="text"
                placeholder="Search for a muscle..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-bar"
            />
            <div className="muscle-list">
                {filteredMuscles.length > 0 ? (
                    filteredMuscles.map((muscle) => (
                        <div 
                            key={muscle.name} 
                            className="muscle-item" 
                            onClick={() => handleMuscleClick(muscle)} 
                            style={{ cursor: 'pointer' }} 
                        >
                            <img 
                                src={muscle.image} 
                                alt={muscle.name} 
                                onError={(e) => {
                                    e.target.onerror = null; 
                                    e.target.src = placeholderImage; 
                                }} 
                            />
                            <h3>{muscle.name}</h3>
                        </div>
                    ))
                ) : (
                    <p className="not-found">Muscle not found</p>
                )}
            </div>
        </div>
    );
};

export default MuscleMenu;