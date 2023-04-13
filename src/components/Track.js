import React from "react";
import { Flex, IconButton } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

export const Track = () => {
  return (
    <div>

    <Flex minWidth='max-content' 
          alignItems='center' gap='2'
          justifyContent='space-between' 
          borderBottom='3px #fff solid' 
          padding='1rem 0'>
      <Flex flexDirection='column' justifyContent='center'>
        <h3>Track Title</h3>
        <p>Artist | Album</p>
      </Flex>
      <IconButton aria-label='Search database' 
          backgroundColor='#fff' icon={<AddIcon />}/>
    </Flex>

    <Flex minWidth='max-content' 
          alignItems='center' gap='2'
          justifyContent='space-between' 
          borderBottom='3px #fff solid' 
          padding='1rem 0'>
      <Flex flexDirection='column' justifyContent='center'>
      <h3>Track Title</h3>
      <p>Artist | Album</p>
      </Flex>
      <IconButton aria-label='Search database' 
          backgroundColor='#fff' icon={<AddIcon />}/>
    </Flex>

    </div>
  )
}