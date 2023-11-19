import { ChevronDownIcon, PhoneIcon } from "@chakra-ui/icons";
import { Flex, Text, HStack, Input, InputGroup, InputLeftElement, Button } from "@chakra-ui/react";
import { Radio, RadioGroup } from '@chakra-ui/react'
import { useState } from "react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react'
const Form3 = () => {
    const [formData, setFormData] = useState({
        eye_disorders: '',
        allergies: '',
        cancer: '',
        cholestrol: '',
        asthma: '',
        skin_infection: '',

    });
    const handleChange = (e, field) => {
        setFormData({
            ...formData,
            [field]: e.target.value,
        });
    };
    return (
        <Flex direction={'column'} gap={10} mt={10} >
            <Flex gap={80} mb={5}>
        <HStack spacing={100}>
          <Text as={'b'}>Allergies:</Text>
          <RadioGroup onChange={(e) => handleChange(e, 'allergies')} >
                <Radio value="Yes"  mr={10}>Yes</Radio>
                <Radio mr={10} value="No"  >No</Radio>
                </RadioGroup>
                </HStack> 
        <HStack ml={6} spacing={100}>
        <Text as={'b'}>Cancer:</Text>

        <RadioGroup onChange={(e) => handleChange(e, 'cancer')} >
                <Radio value="Yes"  mr={10}>Yes</Radio>
                <Radio mr={10} value="No"  >No</Radio>
                </RadioGroup>
          </HStack> 

      </Flex>
 
                <Flex gap={80} mb={5}>
        <HStack spacing={100}>
          <Text as={'b'}>Cholestrol:</Text>
          <RadioGroup onChange={(e) => handleChange(e, 'cholestrol')} >
                <Radio value="Yes"  mr={10}>Yes</Radio>
                <Radio mr={10} value="No"  >No</Radio>
                </RadioGroup>
                </HStack> 
        <HStack ml={6} spacing={100} mb={5}>
        <Text as={'b'}>Asthma:</Text>

        <RadioGroup onChange={(e) => handleChange(e, 'asthma')} >
                <Radio value="Yes"  mr={10}>Yes</Radio>
                <Radio mr={10} value="No"  >No</Radio>
                </RadioGroup>
          </HStack> 
          

      </Flex>
      <Flex gap={80}>
        <HStack spacing={100}>
        <Text as={'b'}>Eye Disorders:</Text>
          <RadioGroup onChange={(e) => handleChange(e, 'eye_disorderes')} >
                <Radio value="Yes"  mr={10}>Yes</Radio>
                <Radio mr={10} value="No"  >No</Radio>
                </RadioGroup>
                </HStack> 
        <HStack ml={-1} spacing={100}>
        <Text as={'b'}>Skin Infection:</Text>
          <RadioGroup onChange={(e) => handleChange(e, 'skin_ifn')} >
                <Radio value="Yes"  mr={10}>Yes</Radio>
                <Radio mr={10} value="No"  >No</Radio>
                </RadioGroup>
          </HStack> 
          

      </Flex>
    
        </Flex>

    );
}

export default Form3;