import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../constants/useDarkSide";

const Switcher = () => {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <div className="bg-slate-300 p-1 rounded-full">
      <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={30} />
    </div>
  );
};

export default Switcher;
