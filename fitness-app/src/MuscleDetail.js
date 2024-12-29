// import React from 'react';
// import { useParams } from 'react-router-dom';
// import chestImage from './images/chest.jpg';
// import backImage from './images/back.jpg';
// import legsImage from './images/legs.jpg';
// import armsImage from './images/arms.jpg';
// import shouldersImage from './images/shoulders.jpg';
// import placeholderImage from './images/placeholder.jpg';

// import chestPushUpsImage from './images/chest_push_ups.jpg';
// import chestBenchPressImage from './images/chest_bench_press.jpg';
// import chestFlyImage from './images/chest_fly.jpg';
// import backPullUpsImage from './images/back_pull_ups.jpg';
// import backDeadliftImage from './images/back_deadlift.jpg';
// import backRowsImage from './images/back_rows.jpg';
// import legsSquatsImage from './images/legs_squats.jpg';
// import legsLungesImage from './images/legs_lunges.jpg';
// import legsPressImage from './images/legs_press.jpg';
// import armsBicepCurlsImage from './images/arms_bicep_curls.jpg';
// import armsTricepDipsImage from './images/arms_tricep_dips.jpg';
// import armsPushUpsImage from './images/arms_push_ups.jpg';
// import shouldersPressImage from './images/shoulders_press.jpg';
// import shouldersLateralImage from './images/shoulders_lateral.jpg';
// import shouldersFrontImage from './images/shoulders_front.jpg';

// const muscleData = {
//     chest: {
//         name: 'Chest',
//         description: 'Exercises for building chest strength and size.',
//         exercises: ['Bench Press', 'Push Ups', 'Chest Fly'],
//         image: chestImage,
//         pictures: [
//             { src: chestBenchPressImage, description: 'Bench Press' },
//             { src: chestPushUpsImage, description: 'Push Ups' },
//             { src: chestFlyImage, description: 'Chest Fly' },
//         ],
//     },
//     back: {
//         name: 'Back',
//         description: 'Exercises to strengthen the back muscles.',
//         exercises: ['Pull Ups', 'Deadlifts', 'Bent Over Rows'],
//         image: backImage,
//         pictures: [
//             { src: backPullUpsImage, description: 'Pull Ups' },
//             { src: backDeadliftImage, description: 'Deadlifts' },
//             { src: backRowsImage, description: 'Bent Over Rows' },
//         ],
//     },
//     legs: {
//         name: 'Legs',
//         description: 'Exercises to develop leg strength and endurance.',
//         exercises: ['Squats', 'Lunges', 'Leg Press'],
//         image: legsImage,
//         pictures: [
//             { src: legsSquatsImage, description: 'Squats' },
//             { src: legsLungesImage, description: 'Lunges' },
//             { src: legsPressImage, description: 'Leg Press' },
//         ],
//     },
//     arms: {
//         name: 'Arms',
//         description: 'Exercises for developing arm muscles.',
//         exercises: ['Bicep Curls', 'Tricep Dips', 'Push Ups'],
//         image: armsImage,
//         pictures: [
//             { src: armsBicepCurlsImage, description: 'Bicep Curls' },
//             { src: armsTricepDipsImage, description: 'Tricep Dips' },
//             { src: armsPushUpsImage, description: 'Push Ups' },
//         ],
//     },
//     shoulders: {
//         name: 'Shoulders',
//         description: 'Exercises for building shoulder strength.',
//         exercises: ['Shoulder Press', 'Lateral Raises', 'Front Raises'],
//         image: shouldersImage,
//         pictures: [
//             { src: shouldersPressImage, description: 'Shoulder Press' },
//             { src: shouldersLateralImage, description: 'Lateral Raises' },
//             { src: shouldersFrontImage, description: 'Front Raises' },
//         ],
//     },
// };

// const MuscleDetail = () => {
//     const { muscleName } = useParams();
//     const muscle = muscleData[muscleName];

//     if (!muscle) {
//         return <h2>Muscle not found</h2>;
//     }

//     return (
//         <div className="muscle-detail">
//             <h2>{muscle.name}</h2>
//             <img 
//                 src={muscle.image} 
//                 alt={`${muscle.name} illustration`} 
//                 onError={(e) => { e.target.onerror = null; e.target.src = placeholderImage; }} 
//             />
//             <p>{muscle.description}</p>
//             <h3>Recommended Exercises:</h3>
//             <ul>
//                 {muscle.exercises.map((exercise) => (
//                     <li key={exercise}>{exercise}</li>
//                 ))}
//             </ul>
//             <h3>Exercise Images:</h3>
//             <div className="exercise-images">
//                 {muscle.pictures.map((picture) => (
//                     <div key={picture.src} className="exercise-item">
//                         <img 
//                             src={picture.src} 
//                             alt={`${picture.description} image`} 
//                             onError={(e) => { 
//                                 e.target.onerror = null; 
//                                 e.target.src = placeholderImage; 
//                                 e.target.alt = 'Image not available'; 
//                             }} 
//                         />
//                         <p>{picture.description}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default MuscleDetail;
