import { Button, Input, Flex, Text, Heading, Box, Image, Divider, AbsoluteCenter, HStack, VStack, Tab, TabList, TabIndicator, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import woman from '../../src/assets/woman1.avif'
import { supabase } from '../config/config'
import { useToast } from "@chakra-ui/react"
import { useState, useEffect } from 'react';
//import { Accordion, AccordionIcon, AccordionButton } from '@chakra-ui/react';
import { useLocation } from 'react-router';
import Modal1 from "../components/Modal1";
import { EditIcon } from '@chakra-ui/icons';
import { useAuth}   from '../contexts/AuthContext'
import { useDisclosure } from '@chakra-ui/react';

//const toast = useToast()
function AdopterProfile() {
const [edit,setEdit] = useState(false);
const location = useLocation();
const adopterId = location.state?.adopterId;

const AuthContext = useAuth()
const userid = AuthContext.userID;

const [basicInfo, setbasicInfo] = useState({})
const [spousesDetails, setSpousesDetails] = useState({})
const [history, setHistory] = useState({})

//const [firstOpen, setfirstAccordian] = useState(true)
//const [heartToggle, setHeartToggle] = useState(false)
//const [firstOpen, setfirstAccordian] = useState(true)

        
const toast = useToast({})
const { isOpen, onOpen, onClose } = useDisclosure()

useEffect(() => {
    const fetchDetails = async () => {
        try {
            const { data:Data, error: errorData } = await supabase
                .from('adopter_basic_info')
                .select()
                .eq('user_id', userid)

            setbasicInfo(Data[0])

            if (errorData) throw errorData
        } catch (error) {
            toast({
                title: "failed to fetch adopter profile details",
                status: "error",
                isClosable: true,
                position: "top"
            })
        }
        try {
            const { data:Data, error: errorData } = await supabase
                .from('adopter_spouses')
                .select()
                .eq('user_id', userid)

            setSpousesDetails(Data[0])

            if (errorData) throw errorData
        } catch (error) {
            toast({
                title: "failed to fetch profile spouse details",
                status: "error",
                isClosable: true,
                position: "top"
            })
        }
        try {
            const { data:Data, error: errorData } = await supabase
                .from('adopter_medical_history')
                .select()
                .eq('user_id', userid)

            setHistory(Data[0])
            console.log(Data[0])
            if (errorData) throw errorData
        } catch (error) {
            toast({
                title: "failed to fetch profile medical history details",
                status: "error",
                isClosable: true,
                position: "top"
            })
        }
    }
    fetchDetails()

}, [])
      
            return ( 
                <Flex w={'100vw'} direction={'column'} h={'100vh'}>
                    <Flex h={110} w={'100vw'} bgColor={'blue.100'} alignItems={'center'} justifyContent={'flex-end'} p={8}>
                        <Button onClick={onOpen}><EditIcon />Edit Profile</Button>
                    </Flex>
                    <Box width={200} height={200} borderRadius='120' borderColor={'blue.100'} overflow='hidden' ml={"10%"} mt={-85} borderWidth={'10px'}>
                        <Image src={woman} />
                    </Box>
                    <Flex gap={180} w={'85vw'}>
                        <Flex direction={'column'} w={'42%'} mt={4}>
                            <Heading ml={160} fontSize={25} mb={5}>Adopter Id : {userid}</Heading>
                            <Box position='relative' padding='5'>
                                <Divider borderWidth={1.5} borderColor={'blue.200'} />
                                <AbsoluteCenter px='4' color={'blue.800'} bg='white' fontWeight={'semibold'} >
                                    Basic Information
                                </AbsoluteCenter>
                            </Box>
                            <Flex direction={'column'} ml={10}>
                                <Text fontSize={16}><span style={{ fontWeight: 'bolder' }}>Family Name : </span>{basicInfo.family_name}</Text>
                                <Text fontSize={16}><span style={{ fontWeight: 'bolder' }}>Annual incom : </span>{basicInfo.annual_income}</Text>
                                <Text fontSize={16}><span style={{ fontWeight: 'bolder' }}>Address : </span>{basicInfo.address}</Text>
                                <Text fontSize={16}><span style={{ fontWeight: 'bolder' }}>City : </span>{basicInfo.city}</Text>
                                <Text fontSize={16}><span style={{ fontWeight: 'bolder' }}>State : </span>{basicInfo.state}</Text>
                                <Text fontSize={16}><span style={{ fontWeight: 'bolder' }}>Pincode : </span>{basicInfo.pincode}</Text>
                                <Text fontSize={17}><span style={{ fontWeight: 'bolder' }}>Marital Status : </span>{basicInfo.marital_status}</Text>
                            </Flex>
                        </Flex>
                        <Flex direction={'column'} mt={-20} >
                        <Tabs variant={'soft-rounded'}>
                                <TabList>
                                    <Tab>Spouse Details 1</Tab>
                                    <Tab>Spouse Details 2</Tab>
                                    <Tab>Medical History</Tab>
                                </TabList>
                                <TabPanels>
                                    <TabPanel p={4}> 
                                        <Text fontSize={17}><span style={{ fontWeight: 'bolder' }}>Name : </span>{spousesDetails.spouse1_name}</Text>
                                        <Text fontSize={17}><span style={{ fontWeight: 'bolder' }}>DOB : </span>{spousesDetails.spouse1_dob}</Text>
                                        <Text fontSize={17}><span style={{ fontWeight: 'bolder' }}>Email ID : </span>{spousesDetails.spouse1_email}</Text>
                                        <Text fontSize={17}><span style={{ fontWeight: 'bolder' }}>Phone No : </span>{spousesDetails.spouse1_phone}</Text>
                                        <Text fontSize={17}><span style={{ fontWeight: 'bolder' }}>Gender : </span>{spousesDetails.spouse1_gender}</Text>
                                        <Text fontSize={17}><span style={{ fontWeight: 'bolder' }}>Blood Group : </span>{spousesDetails.spouse1_blood}</Text>
                                    </TabPanel>
                                    <TabPanel p={4}> 
                                        <Text fontSize={17}><span style={{ fontWeight: 'bolder' }}>Name : </span>{spousesDetails.spouse2_name}</Text>
                                        <Text fontSize={17}><span style={{ fontWeight: 'bolder' }}>DOB : </span>{spousesDetails.spouse2_dob}</Text>
                                        <Text fontSize={17}><span style={{ fontWeight: 'bolder' }}>Email ID : </span>{spousesDetails.spouse2_email}</Text>
                                        <Text fontSize={17}><span style={{ fontWeight: 'bolder' }}>Phone No : </span>{spousesDetails.spouse2_phone}</Text>
                                        <Text fontSize={17}><span style={{ fontWeight: 'bolder' }}>Gender : </span>{spousesDetails.spouse2_gender}</Text>
                                        <Text fontSize={17}><span style={{ fontWeight: 'bolder' }}>Blood group : </span>{spousesDetails.spouse2_blood}</Text>
                                    </TabPanel>
                                    <TabPanel p={4}>
                                        <Text fontSize={17}><span style={{ fontWeight: 'bolder' }}>Asthma : </span>{history.asthma}</Text>
                                        <Text fontSize={17}><span style={{ fontWeight: 'bolder' }}>HIV/AIDS : </span>{history.hiv}</Text>
                                        <Text fontSize={17}><span style={{ fontWeight: 'bolder' }}>UTI : </span>{history.uti}</Text>
                                        <Text fontSize={17}><span style={{ fontWeight: 'bolder' }}>Diabetes : </span>{history.diabetes}</Text>
                                        <Text fontSize={17}><span style={{ fontWeight: 'bolder' }}>Cholestrol : </span>{history.cholestrol}</Text>
                                        <Text fontSize={17}><span style={{ fontWeight: 'bolder' }}>Allergies : </span>{history.allergies}</Text>
                                        <Text fontSize={17}><span style={{ fontWeight: 'bolder' }}>PCOD/PCOS : </span>{history.pcod}</Text>
                                        <Text fontSize={17}><span style={{ fontWeight: 'bolder' }}>Smoking/Drinking : </span>{history.sd}</Text>
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                        </Flex>
                    </Flex>
                </Flex>
             );
        }

        export default AdopterProfile;