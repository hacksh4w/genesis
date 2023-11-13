import { FormControl, FormLabel, Input, Select, Button, Heading, InputGroup, InputLeftAddon, Flex, Textarea } from '@chakra-ui/react'
const DonorApplication = () => {
    return (
        <Flex direction={'column'} justifyContent={'space-around'}>
            <Heading>Personal Information</Heading>
            <FormControl isRequired>
                <FormLabel>Full name</FormLabel>
                <Input type='name' />
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type='email' />
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Phone number</FormLabel>
                <InputGroup>
                    <InputLeftAddon children='+91' />
                    <Input type='tel' placeholder='phone number' />
                </InputGroup>
            </FormControl>
            <FormControl mb={5}>
                <FormLabel>State</FormLabel>
                <Select placeholder='Select state'>
                    <option>Kochi</option>
                    <option>Chennai</option>
                </Select>
            </FormControl >
            <FormControl>
                <FormLabel>Address</FormLabel>
                <Textarea></Textarea>
            </FormControl>
            <FormControl isRequired mb={3}>
                <FormLabel>Date of Birth</FormLabel>
                <Input type='email' placeholder='dd/mm/yyyy' />
            </FormControl >
            <Button>Next</Button>
        </Flex>
    )
}

export default DonorApplication;