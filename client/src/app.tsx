import React from "react";
import { Routes, Route } from "react-router-dom";

import Auth from "@/pages/Auth";
import DashBoard from "@/pages/Dashboard";
import { Toaster } from "@/components/ui/toaster";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="dashboard" element={<DashBoard />} />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
