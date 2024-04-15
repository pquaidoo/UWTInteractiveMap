import React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";

const Button = ({ label, onClick }) => (
  <ChakraButton onClick={onClick}>{label}</ChakraButton>
);

export default Button;
