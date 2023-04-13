import * as React from "react";
import { Flex, Spacer, Box, Heading, Button } from '@chakra-ui/react';

export const NavBar = () => {

  return (
    <Flex minWidth='max-content' alignItems='center' gap='2' 
          background='#ffc8c8'>
      <Box p='2'>
        <Heading size='md' margin='16px'>Spoti & Fire</Heading>
      </Box>
      <Spacer />
      <Button backgroundColor='#ff5555' color='black' margin='16px'>
        Log in
      </Button>
    </Flex>
  )
}