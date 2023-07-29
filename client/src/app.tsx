import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import {
  ClerkProvider,
  SignIn,
  SignedIn,
} from "@clerk/clerk-react";
import DashBoard from "./pages/Dashboard";
import Index from "./pages/Index";
import Attandance from "./pages/Attendance";

const App: React.FC = () => {
  if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable key");
  }
  const clerkKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;
  const navigate = useNavigate();
  // console.log(clerkKey);
  return (
    <>
      <ClerkProvider publishableKey={clerkKey} navigate={(to) => navigate(to)}>
        <Routes>
          <Route path="/" element={<Index/>} />
          <Route path="/auth" element={<SignIn />} />
          <Route path="/dashboard" element={
            <>
            <SignedIn>
              <DashBoard/>
            </SignedIn>
            </>
          }/>
          <Route path="/attendance" element= {<Attandance/>}/>
        </Routes>
      </ClerkProvider>
    </>
  );
};

export default App;
