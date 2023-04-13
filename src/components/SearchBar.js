import React from "react";
import { Input, IconButton, Flex } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

export const SearchBar = () => {

  return (
    <div className="searchBar">
      <Flex minWidth='max-content' alignItems='center' gap='5'>
        <Input placeholder='Search track' size='lg' 
            h='10' borderColor='#ff5555' borderStyle='solid' 
            borderWidth='thick'/>
        <IconButton aria-label='Search database' 
            backgroundColor='#ffc8c8' icon={<SearchIcon />}/>
      </Flex>
    </div>
    
  )
}