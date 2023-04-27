import * as React from "react";
import { Flex, Spacer, Box, Heading } from "@chakra-ui/react";
import { LoginButton } from "./LoginButton";

export const NavBar = () => {
  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      gap="2"
      background="#ffc8c8"
    >
      <Box p="2">
        <Heading size="md" margin="16px">
          Spoti & Fire
        </Heading>
      </Box>
      <Spacer />
      <LoginButton />
    </Flex>
  );
};
