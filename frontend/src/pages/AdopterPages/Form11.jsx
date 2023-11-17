import { ChevronDownIcon, PhoneIcon } from "@chakra-ui/icons";
import { Flex, HStack, Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react";
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
        <RadioGroup onChange={(e) => handleChange(e, 'single')}>
            <HStack spacing={20}>
                <Radio value="single">Single Parent</Radio>
                <Radio value="married">Married Parent</Radio>
                <Radio value="domestic">Domestic Partnership</Radio>
                
            </HStack>
        </RadioGroup>
            <InputGroup>
                <InputLeftElement><MdOutlineFamilyRestroom size={17} /></InputLeftElement>
                <Input placeholder="Familyname" variant={'filled'} onChange={(e) => handleChange(e, 'familyname')}></Input>
            </InputGroup>
            <InputGroup w={400} mt={6} >
                <InputLeftElement
                    pointerEvents='none'
                    color='gray.300'
                    fontSize='1.2em'
                    children='$'
                />
                <Input placeholder='Annual Income' textAlign={'center'} />

            </InputGroup>
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