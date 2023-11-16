import React from 'react'
import { Button, Input, Flex, Text, Heading, Box, Image, Divider, AbsoluteCenter, HStack, VStack, Tab, TabList, TabIndicator, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { MdOutlineDiamond } from "react-icons/md";
import { CheckIcon } from '@chakra-ui/icons';
import { Icon } from '@chakra-ui/react'
import { FaRegMessage } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import woman from '../../src/assets/woman1.avif'
function AdopterProfile() {
    return (
        <Flex gap={180} w={'80vw'} align={'center'} >
            <Flex direction={'column'}>
                <Box width={60} height={60} borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <Image src={woman} />
                </Box>
                <Box position='relative' padding='5'>
                    <Divider />
                    <AbsoluteCenter bg='white' px='4'>
                        Work
                    </AbsoluteCenter>
                </Box>
                <HStack spacing={10}>
                    <Text as='b' fontSize={16}>Spotify New York</Text>
                    <Box as='b' w={20} h={25} textAlign={'center'} borderRadius={5} color={'blue.400'} bg={'blue.100'}>Primary</Box>
                </HStack>
                <Text>Model Engineering College</Text>
                <Text>Kakkanad,Kerala,India</Text>
                <HStack spacing={2} mt={6}>
                    <Text as='b' fontSize={16} w={40}>Metropolitan Museum</Text>
                    <Box as='b' w={24} h={25} textAlign={'center'} borderRadius={5} color={'blue.400'} bg={'blue.100'}>Secondary</Box>
                </HStack>
                <Text>Infopark</Text>
                <Text>Kakkanad,Kerala,India</Text>

                <Box position='relative' padding='5'>
                    <Divider />
                    <AbsoluteCenter bg='white' px='4'>
                        Interests
                    </AbsoluteCenter>
                </Box>
                <Text as='b' fontSize={13}>Sports</Text>
                <Text as='b' fontSize={13}>Designing</Text>
                <Text as='b' fontSize={13}>Video Games</Text>

            </Flex>
            <Flex direction={'column'} >
                <HStack spacing={10}>
                    <Text fontSize={22} as='b'>Sara Anna</Text>
                    <Text fontSize={12} >
                        <Icon as={IoLocationOutline} />Thrikkakara
                    </Text>
                </HStack>
                <Text as='b' fontSize={13} color={'blue.300'}>Product Designer</Text>
                <VStack mr={40} mt={6}>
                    <Text fontSize={17}>User Category </Text>
                    <Icon color={'gold'} h={10} w={20} as={MdOutlineDiamond} />
                </VStack>
                <HStack spacing={4}>
                    <Button leftIcon={<FaRegMessage />} border={'none'} bg={'none'}><Text>Send Message</Text></Button>
                    <Button leftIcon={<CheckIcon />} h={30} color='blue.300' bg='blue.50'>Contact</Button>
                    <Button bg={'none'}><Text>Report User </Text></Button>
                </HStack>
                <Tabs position="relative" variant="unstyled" mt={4}>
                    <TabList>
                        <Tab  >
                            <img width="14" height="14" src="https://img.icons8.com/ios-glyphs/30/visible--v1.png" alt="visible--v1" />Timeline</Tab>

                        <Tab><img width="14" height="14" src="https://img.icons8.com/ios-glyphs/30/user.png" alt="user" />About</Tab>
                    </TabList>
                    <TabIndicator
                        mt="-1.5px"
                        height="2px"
                        bg="blue.500"
                        borderRadius="1px"
                    />
                    <TabPanels>
                        <TabPanel>
                            <p>one!</p>
                        </TabPanel>
                        <TabPanel>
                            <Text fontSize={15}>
                                CONTACT INFORMATION
                            </Text>
                            <HStack mt={3} spacing={16}>
                                <Text  fontSize='14' as={'b'}>Phone:</Text>
                                <Text fontSize={13} color={'blue.400'}>+91 96545134</Text>
                            </HStack>
                            <HStack spacing={14} >
                            <Text  fontSize='14' as={'b'}>Address:</Text>
                            <Text>Green Earth Elements,Thrikkakara,Kochi,Kerala</Text>
                            </HStack> 
                            <HStack spacing={14}>
                            <Text  fontSize='14' as={'b'}>Email:</Text>
                            <Text color={'blue.400'}>test130@gmail.com</Text>

                            </HStack>
                            
                            <Divider mt={5}/>
                            <Text fontSize={15}>
                                BASIC INFORMATION
                            </Text>
                            <HStack mt={3} spacing={16}>
                                <Text  fontSize='14' as={'b'}>Date of birth:</Text>
                                <Text fontSize={13} >04-11-1988</Text>
                            </HStack>
                            <HStack spacing={24} >
                            <Text  fontSize='14' as={'b'}>Gender:</Text>
                            <Text>Female</Text>
                            </HStack> 
                            <HStack spacing={16}>
                            <Text  fontSize='14' as={'b'}>Blood Group:</Text>
                            <Text >O+</Text>

                            </HStack>
                        </TabPanel>

                    </TabPanels>
                </Tabs>




            </Flex>
        </Flex>
    )
}

export default AdopterProfile