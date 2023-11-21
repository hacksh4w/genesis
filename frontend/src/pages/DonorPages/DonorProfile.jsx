import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Flex, Heading, Text, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { supabase } from "../../config/config";
import { IoPersonCircleOutline } from "react-icons/io5";
const DonorProfile = () => {
    const location = useLocation();
    const donorId = location.state?.donorId;

    const [personalInfo, setPersonalInfo] = useState({})
    const [physicalAttributes, setphysicalAttributes] = useState({})
    const [healthInfo, sethealthInfo] = useState({})

    const [heartToggle, setHeartToggle] = useState(false)
    const [firstOpen, setfirstAccordian] = useState(true)

    const handleHeartToggle = () => {
        setHeartToggle(!heartToggle);
    }

    const toast = useToast()
    const handleToast = () => {
        toast({
            title: "Added to cart",
            status: "success",
            isClosable: true,
            position: "top"
        })
    }

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const { data:Data, error: errorData } = await supabase
                    .from('donor_personal_info')
                    .select()
                    .eq('user_id', donorId)

                

                setPersonalInfo(Data[0])

                if (errorData) throw errorData
            } catch (error) {
                toast({
                    title: "failed to fetch profile details",
                    status: "error",
                    isClosable: true,
                    position: "top"
                })
            }
            try {
                const { data:Data, error: errorData } = await supabase
                    .from('donor_physical_attributes')
                    .select()
                    .eq('user_id', donorId)

                setphysicalAttributes(Data[0])

                if (errorData) throw errorData
            } catch (error) {
                toast({
                    title: "failed to fetch profile details",
                    status: "error",
                    isClosable: true,
                    position: "top"
                })
            }
            try {
                const { data:Data, error: errorData } = await supabase
                    .from('donor_health_info')
                    .select()
                    .eq('user_id', donorId)

                sethealthInfo(Data[0])

                if (errorData) throw errorData
            } catch (error) {
                toast({
                    title: "failed to fetch profile details",
                    status: "error",
                    isClosable: true,
                    position: "top"
                })
            }
        }

        fetchDetails()

    }, [])

    return (
        <>
            <Flex justifyContent={'start'} p={10} h={"100vh"} w={"100vw"} gap={10}>
                <Flex direction={'column'} alignItems={'center'} bgColor={'blue.50'} p={20} borderTopLeftRadius={20} borderBottomLeftRadius={20} >
                    <Button bgColor={'blue.50'} _hover={{ bgColor: "blue.50" }} borderRadius={100} left={-120} top={-38} onClick={() => handleHeartToggle()}>{heartToggle == true ? <AiFillHeart size={"2.5rem"} color={"skyblue"} /> : <AiOutlineHeart size={"2.5rem"} color={"skyblue"} />} </Button>
                    <Box bgColor={'blue.50'} h={200} w={200} borderRadius={100} mb={10}><IoPersonCircleOutline color="#BEE3F8" size={200}/></Box>
                    <Heading fontSize={25} color={'blue.800'}>Donor Id : {donorId}</Heading>
                    <Heading>{personalInfo.name}</Heading>
                </Flex>
                <Flex direction={'column'} position={"relative"}>
                    <Heading fontSize={30} color={'blue.800'} mb={5}>Description :</Heading>
                    <Text fontSize={15} fontStyle={"italic"}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorum adipisci quis ut officiis facere inventore tempora nostrum magnam nemo maiores voluptatum cumque quaerat, placeat nulla, temporibus tenetur a enim!</Text>
                    <Accordion allowToggle defaultIndex={firstOpen ? [0] : []} mt={6} mb={10}>
                        <AccordionItem isFocusable={firstOpen}>
                            <AccordionButton borderRadius={10} _expanded={{ bgColor: "blue.100" }} onClick={() => setfirstAccordian(false)} justifyContent={'space-between'} color={'blue.700'} fontWeight={'semibold'}>
                                Personal Information
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel >
                                <Flex gap={20}>
                                    <Flex direction={"column"}>
                                        <Text fontSize={15}><span style={{ fontWeight: "bold" }}>Name : </span>{personalInfo.name}</Text>
                                        <Text fontSize={15}><span style={{ fontWeight: "bold" }}>Age : </span>{personalInfo.age}</Text>
                                        <Text fontSize={15}><span style={{ fontWeight: "bold" }}>Address : </span>{personalInfo.address}</Text>
                                    </Flex>
                                    <Flex direction={"column"}>
                                        <Text fontSize={15}><span style={{ fontWeight: "bold" }}>Occupation: </span>{personalInfo.occupation}</Text>
                                        <Text fontSize={15}><span style={{ fontWeight: "bold" }}>Highest Level of Education : </span>{personalInfo.education_level}</Text>
                                    </Flex>
                                </Flex>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionButton borderRadius={10} _expanded={{ bgColor: "blue.100" }} onClick={() => setfirstAccordian(true)} justifyContent={'space-between'} color={'blue.700'} fontWeight={'semibold'}>
                                Physical Attributes
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel>
                                <Flex gap={20}>
                                    <Flex direction={"column"}>
                                        <Text fontSize={15}><span style={{ fontWeight: "bold" }}>Height : </span>{physicalAttributes.height} cm</Text>
                                        <Text fontSize={15}><span style={{ fontWeight: "bold" }}>Weight : </span>{physicalAttributes.weight} lbs</Text>
                                        <Text fontSize={15}><span style={{ fontWeight: "bold" }}>Eye Color : </span>{physicalAttributes.eye_color}</Text>
                                    </Flex>
                                    <Flex direction={"column"}>
                                        <Text fontSize={15}><span style={{ fontWeight: "bold" }}>Hair Color: </span>{physicalAttributes.hair_color}</Text>
                                        <Text fontSize={15}><span style={{ fontWeight: "bold" }}>Hair Loss : </span>{physicalAttributes.hair_loss}</Text>
                                        <Text fontSize={15}><span style={{ fontWeight: "bold" }}>Hair Type : </span>{physicalAttributes.hair_type}</Text>
                                    </Flex>
                                </Flex>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionButton borderRadius={10} _expanded={{ bgColor: "blue.100" }} onClick={() => setfirstAccordian(true)} justifyContent={'space-between'} color={'blue.700'} fontWeight={'semibold'}>
                                Health Information
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel>
                            <Flex gap={20}>
                                    <Flex direction={"column"}>
                                        <Text fontSize={15}><span style={{ fontWeight: "bold" }}>Allergies : </span>{healthInfo.allergies}</Text>
                                        <Text fontSize={15}><span style={{ fontWeight: "bold" }}>Cholestrol : </span>{healthInfo.cholestrol}</Text>
                                        <Text fontSize={15}><span style={{ fontWeight: "bold" }}>Skin Infection : </span>{healthInfo.skin_infection}</Text>
                                    </Flex>
                                    <Flex direction={"column"}>
                                        <Text fontSize={15}><span style={{ fontWeight: "bold" }}>Cancer : </span>{healthInfo.cancer}</Text>
                                        <Text fontSize={15}><span style={{ fontWeight: "bold" }}>Eye Disorders : </span>{healthInfo.eye_disorders}</Text>
                                        <Text fontSize={15}><span style={{ fontWeight: "bold" }}>Asthma : </span>{healthInfo.asthma}</Text>
                                    </Flex>
                                </Flex>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                    <Button position={"fixed"} top={"83vh"} p={5} w={120} colorScheme="blue" borderRadius={20} onClick={() => handleToast()}>Order Now</Button>
                </Flex>
            </Flex>

        </>
    );
}

export default DonorProfile;