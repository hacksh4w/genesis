import { ChevronDownIcon, PhoneIcon } from "@chakra-ui/icons";
import { Flex, HStack, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Stack } from "@chakra-ui/react";
import UserFillIcon from "remixicon-react/UserFillIcon";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { Radio, RadioGroup } from '@chakra-ui/react'
import { useState } from "react";
const Form11 = () => {
    const [formData, setFormData] = useState({
        single:'',
        familyname: '',
        annualincome: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
    });

    const handleChange = (e, field) => {
        setFormData({
            ...formData,
            [field]: e.target.value,
        });
    };

    return (
        <Flex direction={'column'} gap={5} w={600}>
        
            <InputGroup>
                <InputLeftElement><MdOutlineFamilyRestroom size={17} /></InputLeftElement>
                <Input placeholder="Familyname" variant={'filled'} onChange={(e) => handleChange(e, 'familyname')}></Input>
            </InputGroup>
            <Flex gap={6} w={600}>
            <InputGroup >
                <InputLeftElement
                    pointerEvents='none'
                    color='gray.300'
                    fontSize='1.2em'
                    children='$'
                    textColor={'black'}
                />
                <Input placeholder='Annual Income'  variant={'filled'} onChange={(e) => handleChange(e, 'annualincome')}/>
            </InputGroup>
            <Menu>
                <MenuButton backgroundColor={'gray.100'} borderRadius={5} w={300} >Marital Status <ChevronDownIcon/></MenuButton>
                <MenuList>
                    <MenuItem>Married</MenuItem>
                    <MenuItem>Single</MenuItem>
                    <MenuItem>Domestic Partnership</MenuItem>
                </MenuList>
            </Menu>
            </Flex>
            <InputGroup>
                <InputLeftElement><IoLocationSharp size={19} /></InputLeftElement>
                <Input placeholder="Address" required={'true'} variant={'filled'} onChange={(e) => handleChange(e, 'address')}></Input>
            </InputGroup>
            <Flex gap={6}>
                <Input placeholder="City" variant={'filled'} onChange={(e) => handleChange(e, 'city')}></Input>
                <Input placeholder="State" variant={'filled'} onChange={(e) => handleChange(e, 'state')}></Input>
                <Input placeholder="Pincode" variant={'filled'} onChange={(e) => handleChange(e, 'pincode')}></Input>
            </Flex>



        </Flex>
    );
}

export default Form11;