import React, { useState } from "react";
import { Heading, Flex, Divider } from "@chakra-ui/react";

import Button from './Button'; // Adjust the path based on your file structure

const Header = () => {
  const [headerText, setHeaderText] = useState("Header");
 
  const Bathrooms = () => {
    setHeaderText("Bathrooms");
  };
  const Microwaves = () => {
    setHeaderText("Microwaves");
  };
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="0.5rem"
      bg="gray.400"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="sm" style = {{ padding: '10px 20px'}}> {headerText}</Heading>
        <Button label="Bathrooms" onClick={Bathrooms} />
        <Button label="Microwaves" onClick={Microwaves} />

        <Divider />
      </Flex>
    </Flex>
  );
};

export default Header;