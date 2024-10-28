import React from 'react';
//import TextboxComponent from './SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';

import NavigationBar from './landingPage';

import NaviBar from './navigatioBar';


function App(){
return(
  <Router>
      <NaviBar/>
  <Routes>
    <Route path="/" element={<NavigationBar />} />
    <Route path="/signup" element={<SignUp />} />
    {/* <Route exact path="/test" render={() => {<NaviBar/>}} /> */}
    <Route path="/signin" element={<SignIn />} />
  </Routes>
  </Router>
);
  }

export default App;