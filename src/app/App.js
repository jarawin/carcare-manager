import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';


import Dashboard from '../dashboard/Dashboard';
import Layout from './Layout';


// const Layout = () => <div>Layout</div>
const NoPage = () => <div>NoPage</div>
const Login = () => <div>Login</div>

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="home" element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
