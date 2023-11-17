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
      diabetes:'',
      cholestrol:'',
      covid:'',
      cancer:'',
      smoking:'',
      drinking:'',
      drugs:'',
      pcod:''
  });
  return (
    <Flex direction={'column'}>
      <HStack spacing={20}>
        <HStack>
          <Text as={'b'}>Asthma:</Text>
          <RadioGroup onChange={(e) => handleChange(e, 'asthma')} >
                <Radio value="Yes"  mr={10}>Yes</Radio>
                <Radio mr={10} value="No"  >No</Radio>
                </RadioGroup>
                </HStack> 
        <HStack>
        <Text as={'b'}>HIV/AIDS:</Text>

        <RadioGroup onChange={(e) => handleChange(e, 'asthma')} >
                <Radio value="Yes"  mr={10}>Yes</Radio>
                <Radio mr={10} value="No"  >No</Radio>
                </RadioGroup>
          </HStack> 
      </HStack>

    </Flex>
  )
}

export default Form33