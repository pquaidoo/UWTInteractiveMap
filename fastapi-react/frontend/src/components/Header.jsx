import React from "react";
import { Heading, Flex, Divider } from "@chakra-ui/react";

import Button from './Button'; // Adjust the path based on your file structure

const Header = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };
  const rip = () => {
    console.log('Button clicked!');
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
        <Heading as="h1" size="sm">Header</Heading>
        <Button label="Click Me" onClick={handleClick} />
        <Button label="Click Me" onClick={rip} />
        <Divider />
      </Flex>
    </Flex>
  );
};

export default Header;