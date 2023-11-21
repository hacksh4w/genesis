import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
const Form2 = () => {
    return (
        <Flex direction={'column'} gap={5} w={600}>
            <Flex gap={6}>
                <Input placeholder="Height (cm)" variant={'filled'}></Input>
                <Input placeholder="Weight (lbs)" variant={'filled'}></Input>
            </Flex>
            <Flex gap={6}>
                <Input placeholder="Eye Color" variant={'filled'}></Input>
                <Input placeholder="Hair Color" variant={'filled'}></Input>
            </Flex>
            <Flex gap={6}>
                <Input placeholder="Hair Type" variant={'filled'}></Input>
                <Input placeholder="Hair Loss" variant={'filled'}></Input>
            </Flex>
        </Flex>
    );
}

export default Form2;