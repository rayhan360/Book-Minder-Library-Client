import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import { useEffect } from "react";

const MainLayout = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  // Function to toggle between dark and light modes
  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Update localStorage with the user's mode preference
  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  const bodyStyle = {
    backgroundColor: isDarkMode ? "#262626" : "#fff",
    color: isDarkMode ? "#fff" : "#262626",
  };

  return (
    <div style={bodyStyle}>
      <NavBar toggleMode={toggleMode} isDarkMode={isDarkMode}></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster></Toaster>
    </div>
  );
};

export default MainLayout;
