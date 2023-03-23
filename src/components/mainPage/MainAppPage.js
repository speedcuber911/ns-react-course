import { createContext, useEffect, useState } from "react";
import MainComponent from "./MainContent";
import Navbar from "./Navbar";
/*
  React context
*/

export const UserContext = createContext();
export const ThemeContext = createContext();

export function MainAppPage() {
  const [user, setUser] = useState({
    userName: "Yash",
    password: "anbckodcmjoas",
  });

  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    setTimeout(() => {
      setUser({
        ...user,
        userName: "Parikshit",
      });
    }, 2000);
  }, [user]);

  return (
    <ThemeContext.Provider value={theme}>
      <UserContext.Provider value={user}>
        <div>
          <Navbar />
          <MainComponent />
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme}            
          </button>
        </div>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}
