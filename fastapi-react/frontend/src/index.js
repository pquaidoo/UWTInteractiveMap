import React from "react";
import { render } from 'react-dom';
import { ChakraProvider } from "@chakra-ui/react";

import Header from "./components/Header";
import Floors from "./components/Floors";  // new

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Floors />
    </ChakraProvider>
  )
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)
