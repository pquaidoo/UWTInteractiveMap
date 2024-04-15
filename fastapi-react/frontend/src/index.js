import React from "react";
import { render } from "react-dom";
// import { ChakraProvider } from "@chakra-ui/react";

import Header from "./components/Header";
import Floors from "./components/Floors"; // new
import { StyleProvider } from "./components/AppContext";

function App() {
  return (
    <StyleProvider>
      <Header />
      <Floors />
    </StyleProvider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
