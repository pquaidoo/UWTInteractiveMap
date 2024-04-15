import React, { createContext, useState, useContext } from "react";

const StyleContext = createContext();

export const useStyle = () => useContext(StyleContext);

export const StyleProvider = ({ children }) => {
  const [className, setClassName] = useState("");

  const changeClassName = (newClassName) => {
    //Means if className equals newClassName then we revert it to be blank.
    setClassName((currentClassName) =>
      currentClassName === newClassName ? "" : newClassName
    );
    console.log(`Changing class name to: ${newClassName}`);
  };

  return (
    <StyleContext.Provider value={{ className, changeClassName }}>
      {children}
    </StyleContext.Provider>
  );
};
