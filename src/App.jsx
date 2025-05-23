import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "./components/signup/Signup";
import Profile from "./components/account/Profile";
import UserTable from "./components/UserTable";

import Footer from "./components/common/Footer";
import MainLayout from "./components/common/MainLayout";
import Membership from "./components/account/Membership";
import Devices from "./components/account/Devices";
import Settings from "./components/account/Settings";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/account" element={<MainLayout />}>
          <Route index element={<Navigate to="profile" replace />} />
          <Route path="profile" element={<Profile />} />
          <Route path="membership" element={<Membership />} />
          <Route path="devices" element={<Devices />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/user" element={<UserTable />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
