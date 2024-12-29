import React from 'react';
//import TextboxComponent from './SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import User from './User';
import EditPage from './EditPage';
import MuscleMenu from './MuscleMenu';
import MuscleDetail from './MuscleDetail';

import NavigationBar from './landingPage';

import NaviBar from './navigatioBar';
import Recipes from './Recipes';


function App(){
return(
  <Router>
      <NaviBar/>
  <Routes>
    <Route path="/" element={<NavigationBar />} />
    <Route path="/signup" element={<SignUp />} />
    {/* <Route exact path="/test" render={() => {<NaviBar/>}} /> */}
    <Route path="/signin" element={<SignIn />} />
    <Route path="/User" element={<User />} />
    <Route path ="/Recipes" element={<Recipes/>}/>
    <Route path="/edit" element={<EditPage />} />
    {/* <Route path="/" element={<MuscleMenu />} />
    <Route path="/muscle/:muscleName" element={<MuscleDetail />} /> */}
  </Routes>
  </Router>
);
  }

export default App;