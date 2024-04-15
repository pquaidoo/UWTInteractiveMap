import React, { createContext, useState, useContext } from "react";

const StyleContext = createContext();

export const useStyle = () => useContext(StyleContext);

export const StyleProvider = ({ children }) => {
  const [className, setClassName] = useState("");

  const changeClassName = (newClassName) => {
    console.log(`Changing class name to: ${newClassName}`);
    setClassName(newClassName);
  };

  return (
    <StyleContext.Provider value={{ className, changeClassName }}>
      {children}
    </StyleContext.Provider>
  );
};
