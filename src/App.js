import React from 'react';
import './style.css';
import { Dashboard, Members, Projects } from './pages/';
import { Sidebar } from './components/';
import { Routes, Route } from 'react-router';
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/Projects" element={<Dashboard />}></Route>
        <Route path="/details/:id" element={<Projects />}></Route>
        <Route path="/Members" element={<Members />}></Route>
        <Route path="/*" exact element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}
