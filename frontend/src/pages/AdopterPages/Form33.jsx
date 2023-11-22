import { useState } from "react";
import { Flex, HStack, Input, InputGroup, InputLeftElement, Stack, Tab, Tabs, Box, TabList, TabIndicator, TabPanel, TabPanels, VStack, Text,Menu,MenuList,MenuButton,MenuItem,Button } from "@chakra-ui/react";
import { PhoneIcon, EmailIcon, ChevronDownIcon, CheckIcon } from '@chakra-ui/icons'
import { Icon } from '@chakra-ui/react'
import { Radio, RadioGroup } from '@chakra-ui/react'


const Form33 = ({onFormDataChange}) => {
  const [formData, setFormData] = useState({
      asthma:'',
      hiv:'',
      uti:'',
      allergies:'',
      diabetes:'',
      cholestrol:'',
      pcod:'',
      sd : '' //smoking or drinkinh
    });
    //  covid:'',
      //cancer:'',
      //smoking:'',
      //drinking:'',
      //drugs:'',
      
  //});
  const handleChange = (e, field) => {
    const updatedFormData = { ...formData, [field]: e.target.value };
setFormData(updatedFormData);
onFormDataChange(updatedFormData);
};
  return (
    <Flex direction={'column'} mt={8} gap={10}>
      <Flex gap={80}>
        <HStack spacing={100}>
          <Text as={'b'}>Asthma:</Text>
          <Input placeholder='Yes/No'  variant={'filled'} onChange={(e) => handleChange(e, 'asthma')}/>
        </HStack> 
        <HStack ml={6} spacing={100}>
          <Text as={'b'}>HIV/AIDS:</Text>
          <Input placeholder='Yes/No'  variant={'filled'} onChange={(e) => handleChange(e, 'hiv')}/>
        </HStack> 
      </Flex>
      <Flex gap={350}>
        <HStack spacing={100}>
          <Text as={'b'}>UTI:</Text>
          <Input placeholder='Yes/No'  variant={'filled'} onChange={(e) => handleChange(e, 'uti')}/>
        </HStack> 
        <HStack spacing={100}>
          <Text as={'b'}>Allergies:</Text>
          <Input placeholder='Yes/No'  variant={'filled'} onChange={(e) => handleChange(e, 'allergies')}/>
        </HStack> 
      </Flex>
      <Flex gap={350}>
        <HStack spacing={100} >
          <Text as={'b'}>Diabetes:</Text>
          <Input placeholder='Yes/No'  variant={'filled'} onChange={(e) => handleChange(e, 'diabetes')}/>
        </HStack> 
        <HStack spacing={100} ml={-10}>
          <Text as={'b'}>Cholestrol:</Text>
          <Input placeholder='Yes/No'  variant={'filled'} onChange={(e) => handleChange(e, 'cholestrol')}/>
        </HStack> 
      </Flex>
      <Flex gap={350}>
        <HStack spacing={100} >
          <Text as={'b'}>PCOD:</Text>
          <Input placeholder='Yes/No'  variant={'filled'} onChange={(e) => handleChange(e, 'pcod')}/>
        </HStack> 
        <HStack spacing={100} ml={-10}>
          <Text as={'b'}>Smoking/Drinking:</Text>
          <Input placeholder='Yes/No'  variant={'filled'} onChange={(e) => handleChange(e, 'sd')}/>
        </HStack> 
      </Flex>
    </Flex>
  )
}

export default Form33