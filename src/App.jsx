import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/signup/Signup";
import Profile from "./components/profile/Profile";
import UserTable from "./components/UserTable";

import Footer from "./components/common/Footer";
import MainLayout from "./components/common/MainLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/profile" element={<MainLayout />} />
        <Route path="/user" element={<UserTable />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
