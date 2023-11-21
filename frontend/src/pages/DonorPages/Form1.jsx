import { ChevronDownIcon, PhoneIcon } from "@chakra-ui/icons";
import { Button, Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import UserFillIcon from "remixicon-react/UserFillIcon";
import { IoLocationSharp } from "react-icons/io5";
import { AiFillMail } from "react-icons/ai";
import { useState } from "react";
const Form1 = ({ onFormDataChange }) => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        phone: '',
        email: '',
        age: '',
        dob: '',
        occupation: '',
        education_level: '',
        city: '',
        state: '',
        pincode: '',
    });

    const handleChange = (e, field) => {
        const updatedFormData = { ...formData, [field]: e.target.value };
    setFormData(updatedFormData);
    onFormDataChange(updatedFormData);
    };
    
    return (
        <Flex direction={'column'} gap={5} w={600}>
            <InputGroup>
                <InputLeftElement><UserFillIcon size={17} /></InputLeftElement>
                <Input placeholder="Name" variant={'filled'} onChange={(e) => handleChange(e, 'name')}></Input>
            </InputGroup>
            <InputGroup>
                <InputLeftElement><IoLocationSharp size={19} /></InputLeftElement>
                <Input placeholder="Address" required={'true'} variant={'filled'} onChange={(e) => handleChange(e, 'address')}></Input>
            </InputGroup>
            <Flex gap={6}>
                <InputGroup>
                    <InputLeftElement><PhoneIcon /></InputLeftElement>
                    <Input placeholder="Phone" variant={'filled'} onChange={(e) => handleChange(e, 'phone')}></Input>
                </InputGroup>
                <InputGroup>
                    <InputLeftElement><AiFillMail /></InputLeftElement>
                    <Input placeholder="Email" required={'true'} variant={'filled'} onChange={(e) => handleChange(e, 'email')}></Input>
                </InputGroup>
            </Flex>
            <Flex gap={6}>
                <Input placeholder="Age" variant={'filled'} onChange={(e) => handleChange(e, 'age')}></Input>
                <Input placeholder="DOB" variant={'filled'} onChange={(e) => handleChange(e, 'dob')}></Input>
            </Flex>
            <Flex gap={6}>
                <Input placeholder="Occupation" variant={'filled'} onChange={(e) => handleChange(e, 'occupation')}></Input>
                <Input placeholder="Highest Level of Education" variant={'filled'} onChange={(e) => handleChange(e, 'education_level')}></Input>
            </Flex>
            <Flex gap={6}>
                <Input placeholder="City" variant={'filled'} onChange={(e) => handleChange(e, 'city')}></Input>
                <Input placeholder="State" variant={'filled'} onChange={(e) => handleChange(e, 'state')}></Input>
                <Input placeholder="Pincode" variant={'filled'} onChange={(e) => handleChange(e, 'pincode')}></Input>
            </Flex>
        </Flex>
    );
}

export default Form1;