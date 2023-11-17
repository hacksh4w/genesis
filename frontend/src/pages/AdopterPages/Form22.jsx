import React from 'react'
import { useState } from "react";
import { Flex, HStack, Input, InputGroup, InputLeftElement, Stack, Tab, Tabs, Box, TabList, TabIndicator, TabPanel, TabPanels, VStack, Text,Menu,MenuList,MenuButton,MenuItem,Button } from "@chakra-ui/react";
import { PhoneIcon, EmailIcon, ChevronDownIcon, CheckIcon } from '@chakra-ui/icons'
import { Icon } from '@chakra-ui/react'
import { Radio, RadioGroup } from '@chakra-ui/react'
import { FaRegAddressCard } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
const Form22 = () => {
    const [formData, setFormData] = useState({
        spouse1_name: '',
        spouse2_name: '',
        spose1_dob: '',
        spouse2_dob: '',
        spouse1_email: '',
        spouse2_email: '',
        spouse1_phone: '',
        spouse2_phone: '',
        spouse1_aadhar: '',
        spouse2_aadhar: '',
        spouse1_gender: '',
        spouse2_gender: '',
        spouse1_blood: '',
        spouse2_blood: ''
    });
    return (
        <Flex>
            <Tabs position="relative" variant="unstyled"  >
                <TabList  >
                    <Tab px={40} >Spouse 1</Tab>
                    <Tab px={40}>Spouse 2</Tab>
                </TabList>
                <TabIndicator
                    mt="-1.1px"
                    height="2px"
                    bg="blue.500"
                    ml={10}
                    borderRadius="1px"
                />
                <TabPanels > 
                    <TabPanel>
                        <Flex direction={'column'} w={600} gap={5}>
                            <Input placeholder='Name' onChange={(e) => handleChange(e, 'spouse1_name')}></Input>
                            <Input
                                placeholder="DOB"
                                size="md"
                                type="date"
                                onChange={(e) => handleChange(e, 'spouse1_dob')}
                            />
                            <Flex gap={10}>
                                <InputGroup>

                                    <InputLeftElement pointerEvents='none'>
                                        <EmailIcon color='gray.300' />
                                    </InputLeftElement>
                                    <Input type='email' placeholder='Email' onChange={(e) => handleChange(e, 'spouse1_email')} />
                                </InputGroup>
                                <InputGroup>

                                    <InputLeftElement pointerEvents='none'>
                                        <PhoneIcon color='gray.300' />
                                    </InputLeftElement>
                                    <Input type='tel' placeholder='Phone number' onChange={(e) => handleChange(e, 'spouse1_phone')} />
                                </InputGroup>                            </Flex>
                                <Flex gap={8}>
            <InputGroup>

<InputLeftElement pointerEvents='none'>
    <Icon as={FaRegAddressCard} />
</InputLeftElement>
<Input type='email' placeholder='Aadhar' onChange={(e) => handleChange(e, 'spouse1_aadhar')} />
</InputGroup>
</Flex>

                                <HStack> 
                                <Text  as='b' >Gender:   </Text>
                                
                                <RadioGroup onChange={(e) => handleChange(e, 'spouse1_sex')} >
                <Radio value="male"  mr={10}>Male</Radio>
                <Radio mr={10} value="female"  >Female</Radio>
                <Radio value="intersex">Intersex</Radio>

                </RadioGroup>
                
            </HStack>
            <Menu onChange={(e) => handleChange(e, 'spouse1_blood')}  >
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

                        </Flex>
                    </TabPanel>
                    <TabPanel>
                    <Flex direction={'column'} w={600} gap={5}>
                            <Input placeholder='Name' onChange={(e) => handleChange(e, 'spouse2_name')}></Input>
                            <Input
                                placeholder="DOB"
                                size="md"
                                type="date"
                                onChange={(e) => handleChange(e, 'spouse2_dob')}
                            />
                            <Flex gap={10}>
                                <InputGroup>

                                    <InputLeftElement pointerEvents='none'>
                                        <EmailIcon color='gray.300' />
                                    </InputLeftElement>
                                    <Input type='email' placeholder='Email' onChange={(e) => handleChange(e, 'spouse2_email')} />
                                </InputGroup>
                                <InputGroup>

                                    <InputLeftElement pointerEvents='none'>
                                        <PhoneIcon color='gray.300' />
                                    </InputLeftElement>
                                    <Input type='tel' placeholder='Phone number' onChange={(e) => handleChange(e, 'spouse2_phone')} />
                                </InputGroup>                            </Flex>
                                <Flex gap={8}>
            <InputGroup>

<InputLeftElement pointerEvents='none'>
    <Icon as={FaRegAddressCard} />
</InputLeftElement>
<Input type='email' placeholder='Aadhar' onChange={(e) => handleChange(e, 'spouse2_aadhar')} />
</InputGroup>
</Flex>

                                <HStack> 
                                <Text  as='b' >Gender:   </Text>
                                
                                <RadioGroup onChange={(e) => handleChange(e, 'spouse2_sex')} >
                <Radio value="male"  mr={10}>Male</Radio>
                <Radio mr={10} value="female"  >Female</Radio>
                <Radio value="intersex">Intersex</Radio>

                </RadioGroup>
                
            </HStack>
            <Menu onChange={(e) => handleChange(e, 'spouse2_blood')}>
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

                        </Flex>
                    </TabPanel>

                </TabPanels>
            </Tabs>
        </Flex>
    )
}

export default Form22