"use client"

import { useTheme } from "next-themes";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useEffect, useState } from "react";
const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [ mounted, setMounted ] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="cursor-pointer">
      {theme === "dark" ? (
        <LightModeIcon onClick={() => setTheme("light")} className="dark:text-[#e3dddd] text-[23px]"/>
      ) : (
        <DarkModeIcon onClick={() => setTheme("dark")} />
      )}
    </div>
  );
};

export default ThemeSwitcher;
