import React from 'react'
import { Button, Input, Flex, InputGroup, Heading, Text, Divider, InputLeftElement, Stack, Menu, MenuButton, MenuItem, MenuList, Center,InputRightElement } from '@chakra-ui/react'
import { PhoneIcon, EmailIcon, ChevronDownIcon,CheckIcon } from '@chakra-ui/icons'
import { FaRegAddressCard } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { Icon } from '@chakra-ui/react'

function AdopterApplication() {
    return (
        <Flex h={'100vh'} w={'100vh'} direction={'column'}>
            <Heading mb={8}>Adopter Application</Heading>

            <Divider />
            <Flex gap={500} >

                <Flex direction={'column'} >
                    <Stack spacing={7}>
                        <Heading fontSize={25}>Spouse1</Heading>

                        <Input placeholder='Name'></Input>
                        <InputGroup>

                            <InputLeftElement pointerEvents='none'>
                                <PhoneIcon color='gray.300' />
                            </InputLeftElement>
                            <Input type='tel' placeholder='Phone number' />
                        </InputGroup>

                        <InputGroup>

                            <InputLeftElement pointerEvents='none'>
                                <EmailIcon color='gray.300' />
                            </InputLeftElement>
                            <Input type='email' placeholder='Email' />
                        </InputGroup>

                        <Input
                            placeholder="DOB"
                            size="md"
                            type="date"
                        />
                        <InputGroup>

                            <InputLeftElement pointerEvents='none'>
                                <Icon as={FaRegAddressCard} />
                            </InputLeftElement>
                            <Input type='email' placeholder='Aadhar' />
                        </InputGroup>

                        <Menu>
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                Blood Group
                            </MenuButton>
                            <MenuList>
                                <MenuItem>O+</MenuItem>
                                <MenuItem>O-</MenuItem>
                                <MenuItem>A+</MenuItem>
                                <MenuItem>B+</MenuItem>
                                <MenuItem>AB+</MenuItem>

                            </MenuList>
                        </Menu>
                        <Menu>
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                Sex
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Female</MenuItem>
                                <MenuItem>Male</MenuItem>
                                <MenuItem>Intersex</MenuItem>

                            </MenuList>
                        </Menu>

                    </Stack>
                </Flex>
                <Flex direction={'column'}>
                    <Stack spacing={7}>
                        <Heading fontSize={25}>Spouse2</Heading>

                        <Input placeholder='Name' colorScheme='red'>

                        </Input>
                        <InputGroup>

                            <InputLeftElement pointerEvents='none'>
                                <PhoneIcon color='gray.300' />
                            </InputLeftElement>
                            <Input type='tel' placeholder='Phone number' />
                        </InputGroup>
                        <InputGroup>

                            <InputLeftElement pointerEvents='none'>
                                <EmailIcon color='gray.300' />
                            </InputLeftElement>
                            <Input type='email' placeholder='Email' />
                        </InputGroup>
                        <Input
                            placeholder="DOB"
                            size="md"
                            type="date"
                        />
                        <InputGroup>

                            <InputLeftElement pointerEvents='none'>
                                <Icon as={FaRegAddressCard} />
                            </InputLeftElement>
                            <Input type='email' placeholder='Aadhar' />
                        </InputGroup>
                        <Menu>
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                Blood Group
                            </MenuButton>
                            <MenuList>
                                <MenuItem>O+</MenuItem>
                                <MenuItem>O-</MenuItem>
                                <MenuItem>A+</MenuItem>
                                <MenuItem>B+</MenuItem>
                                <MenuItem>AB+</MenuItem>

                            </MenuList>
                        </Menu>
                        <Menu>
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                Sex
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Female</MenuItem>
                                <MenuItem>Male</MenuItem>
                                <MenuItem>Intersex</MenuItem>

                            </MenuList>
                        </Menu>
                    </Stack>
                </Flex>
            </Flex>
            <Center>
            <InputGroup w={400} mt={6} >
    <InputLeftElement
      pointerEvents='none'
      color='gray.300'
      fontSize='1.2em'
      children='$'
    />
    <Input  placeholder='Annual Income' textAlign={'center'}  />
    
  </InputGroup>
            </Center>
            <Center>
                <Input textAlign={'center'} placeholder='Address' colorScheme='red' mt={6} w={400}></Input>
            </Center>
            <Center>
                <Input textAlign={'center'} placeholder='City' colorScheme='red' mt={6} w={400}></Input>
            </Center>
            <Center>
                <InputGroup mt={5} ml={275}>


                    <Input type='text' placeholder='Pincode' w={400} textAlign={'center'} />
                </InputGroup>
            </Center>
            <Center>
                <Input textAlign={'center'} placeholder='Country' colorScheme='red' mt={6} w={400}></Input>
            </Center>

        </Flex>
    )
}

export default AdopterApplication