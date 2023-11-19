import React from 'react'
import { useState } from "react";
import { Flex, HStack, Input, InputGroup, InputLeftElement, Stack, Tab, Tabs, Box, TabList, TabIndicator, TabPanel, TabPanels, VStack, Text,Menu,MenuList,MenuButton,MenuItem,Button } from "@chakra-ui/react";
import { PhoneIcon, EmailIcon, ChevronDownIcon, CheckIcon } from '@chakra-ui/icons'
import { Icon } from '@chakra-ui/react'
import { Radio, RadioGroup } from '@chakra-ui/react'
const Form33 = () => {
  const [formData, setFormData] = useState({
      asthma:'',
      hiv:'',
      uti:'',
      allergies:'',
      diabetes:'',
      cholestrol:'',
      covid:'',
      cancer:'',
      smoking:'',
      drinking:'',
      drugs:'',
      pcod:''
  });
  const handleChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };
  return (
    <Flex direction={'column'} mt={8} gap={10}>
      <Flex gap={80}>
        <HStack spacing={100}>
          <Text as={'b'}>Asthma:</Text>
          <RadioGroup onChange={(e) => handleChange(e, 'asthma')} >
                <Radio value="Yes"  mr={10}>Yes</Radio>
                <Radio mr={10} value="No"  >No</Radio>
                </RadioGroup>
                </HStack> 
        <HStack ml={6} spacing={100}>
        <Text as={'b'}>HIV/AIDS:</Text>

        <RadioGroup onChange={(e) => handleChange(e, 'hiv')} >
                <Radio value="Yes"  mr={10}>Yes</Radio>
                <Radio mr={10} value="No"  >No</Radio>
                </RadioGroup>
          </HStack> 

      </Flex>
      <Flex gap={350}>
        <HStack spacing={100}>
          <Text as={'b'}>UTI:</Text>
          <RadioGroup onChange={(e) => handleChange(e, 'uti')} ml={8} >
                <Radio value="Yes"  mr={10}>Yes</Radio>
                <Radio mr={10} value="No"  >No</Radio>
                </RadioGroup>
                </HStack> 
        <HStack spacing={100}>
        <Text as={'b'}>Allergies:</Text>

        <RadioGroup onChange={(e) => handleChange(e, 'allergies')}  >
                <Radio value="Yes"  mr={10}>Yes</Radio>
                <Radio mr={10} value="No"  >No</Radio>
                </RadioGroup>
          </HStack> 

      </Flex>
      <Flex gap={350}>
        <HStack spacing={100} >
          <Text as={'b'}>Diabetes:</Text>
          <RadioGroup onChange={(e) => handleChange(e, 'diabetes')} ml={8} >
                <Radio value="Yes"  mr={10}>Yes</Radio>
                <Radio mr={10} value="No"  >No</Radio>
                </RadioGroup>
                </HStack> 
        <HStack spacing={100} ml={-10}>
        <Text as={'b'}>Cholestrol:</Text>

        <RadioGroup onChange={(e) => handleChange(e, 'cholestrol')}  >
                <Radio value="Yes"  mr={10}>Yes</Radio>
                <Radio mr={10} value="No"  >No</Radio>
                </RadioGroup>
          </HStack> 

      </Flex>
     
    </Flex>
  )
}

export default Form33