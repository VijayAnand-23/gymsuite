// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import MemberList from './MemberList';
import ClassSchedule from './ClassSchedule';
import Payment from './Payment';

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/members" element={<MemberList />} />
          <Route path="/classes" element={<ClassSchedule />} />
          <Route path="/payments" element={<Payment />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
