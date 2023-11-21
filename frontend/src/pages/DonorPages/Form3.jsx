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
const Form3 = ({onFormDataChange}) => {
    const [formData, setFormData] = useState({
        eye_disorders: '',
        allergies: '',
        cancer: '',
        cholestrol: '',
        asthma: '',
        skin_infection: '',

    });
    const handleChange = (value, field) => {
        const updatedFormData = { ...formData, [field]: value };
    setFormData(updatedFormData);
    onFormDataChange(updatedFormData);
    };
    return (
        <Flex direction={'column'} gap={5} w={600}>
            <Flex gap={6}>
                <Input placeholder="Eye Disorders" variant={'filled'} onChange={(e)=>handleChange(e.target.value,'eye_disorders')}></Input>
                <Input placeholder="Allergies" variant={'filled'} onChange={(e)=>handleChange(e.target.value,'allergies')}></Input>
            </Flex>
            <Flex gap={6}>
                <Input placeholder="Cancer" variant={'filled'} onChange={(e)=>handleChange(e.target.value,'cancer')}></Input>
                <Input placeholder="Cholestrol" variant={'filled'} onChange={(e)=>handleChange(e.target.value,'cholestrol')}></Input>
            </Flex>
            <Flex gap={6}>
                <Input placeholder="Asthma" variant={'filled'} onChange={(e)=>handleChange(e.target.value,'asthma')}></Input>
                <Input placeholder="Skin Infection" variant={'filled'} onChange={(e)=>handleChange(e.target.value,'skin_infection')}></Input>
            </Flex>

        </Flex>

    );
}

export default Form3;