import { Button, Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useEffect, useState } from "react";
const Form2 = ({ onFormDataChange }) => {
    const [formData,setFormData]=useState({
        height:'',
        weight:'',
        eye_color:'',
        hair_color:'',
        hair_type:'',
        hair_loss:''

    })
    const handleChange = (e, field) => {
        const updatedFormData = { ...formData, [field]: e.target.value };
    setFormData(updatedFormData);
    onFormDataChange(updatedFormData);
    };
    return (
        <Flex direction={'column'} gap={5} w={600}>
            <Flex gap={6}>
                <Input placeholder="Height (cm)" variant={'filled'} onChange={(e)=>handleChange(e,'height')}></Input>
                <Input placeholder="Weight (lbs)" variant={'filled'} onChange={(e)=>handleChange(e,'weight')}></Input>
            </Flex>
            <Flex gap={6}>
                <Input placeholder="Eye Color" variant={'filled'} onChange={(e)=>handleChange(e,'eye_color')}></Input>
                <Input placeholder="Hair Color" variant={'filled'} onChange={(e)=>handleChange(e,'hair_color')}></Input>
            </Flex>
            <Flex gap={6}>
                <Input placeholder="Hair Type" variant={'filled'} onChange={(e)=>handleChange(e,'hair_type')}></Input>
                <Input placeholder="Hair Loss" variant={'filled'} onChange={(e)=>handleChange(e,'hair_loss')}></Input>
            </Flex>
        </Flex>
    );
}

export default Form2;