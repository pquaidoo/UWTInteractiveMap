import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import Button from "./Button";
import { useStyle } from "./AppContext";

const Header = () => {
  const { changeClassName } = useStyle();

  const handleClick = () => {
    console.log("Button clicked!");
    changeClassName("bathrooms");
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
        <Heading as="h1" size="sm" style={{ padding: "10px 20px" }}>
          Header
        </Heading>
        <Button label="Change Floor Style" onClick={handleClick} />
      </Flex>
    </Flex>
  );
};

export default Header;
