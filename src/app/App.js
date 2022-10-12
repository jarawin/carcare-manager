import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Layout from "./Layout";
import Queue from "../pages/queue/Queue";
import Login from "../pages/login/Login";
import NoPage from "../pages/nopage/NoPage";
import Services from "../pages/services/Services";
import Dashboard from "../pages/dashboard/Dashboard";
import Customers from "../pages/customers/Customers";
import Employees from "../pages/employees/Employees";
import Promotions from "../pages/promotions/Promotions";
import Commissions from "../pages/commission/Commission";
import QueueHistory from "../pages/queuehistory/QueueHistory";
import NoPermission from "../pages/nopermission/NoPermission";
import Profile from "../pages/profile/Profile";
import Application from "../pages/application/Application";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/login" element={<Navigate to="/" />} />
        <Route path="/home" element={<Navigate to="/" />} />

        <Route path="/register" element={<Navigate to="/application" />} />
        <Route path="/application" element={<Application />} />

        <Route path="/" element={<Layout />}>
          <Route path="q" element={<Navigate to="/queue" />} />
          <Route path="queue" element={<Queue />} />

          <Route path="qh" element={<Navigate to="/queueHistory" />} />
          <Route path="queueHistory" element={<QueueHistory />} />

          <Route path="p" element={<Navigate to="/profile" />} />
          <Route path="profile" element={<Profile />} />

          <Route path="c" element={<Navigate to="/customers" />} />
          <Route path="customers" element={<Customers />} />

          <Route path="e" element={<Navigate to="/employees" />} />
          <Route path="employees" element={<Employees />} />

          <Route path="d" element={<Navigate to="/dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />

          <Route path="cm" element={<Navigate to="/commissions" />} />
          <Route path="commissions" element={<Commissions />} />

          <Route path="pm" element={<Navigate to="/promotions" />} />
          <Route path="promotions" element={<Promotions />} />

          <Route path="s" element={<Navigate to="/services" />} />
          <Route path="services" element={<Services />} />
        </Route>

        <Route path="/nopermission" element={<NoPermission />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
