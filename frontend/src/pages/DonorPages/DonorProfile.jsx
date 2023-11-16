import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Flex, Heading, Text, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
const DonorProfile = () => {
    const [heartToggle, setHeartToggle] = useState(false)
    const[firstOpen,setfirstAccordian]=useState(true)

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
    return (
        <>
            <Flex justifyContent={'start'} p={10} h={"100vh"} w={"100vw"} gap={10}>
                <Flex direction={'column'} alignItems={'center'} bgColor={'blue.50'} p={20} borderTopLeftRadius={20} borderBottomLeftRadius={20} >
                    <Button bgColor={'blue.50'} _hover={{ bgColor: "blue.50" }} borderRadius={100} left={-120} top={-38} onClick={() => handleHeartToggle()}>{heartToggle == true ? <AiFillHeart size={"2.5rem"} color={"skyblue"} /> : <AiOutlineHeart size={"2.5rem"} color={"skyblue"} />} </Button>
                    <Box bgColor={'blue.100'} h={200} w={200} borderRadius={100} mb={10}></Box>
                    <Heading fontSize={25} color={'blue.800'}>Donor Id : 1001</Heading>
                    <Heading>John Doe</Heading>
                </Flex>
                <Flex direction={'column'} position={"relative"}>
                    <Heading fontSize={30} color={'blue.800'} mb={5}>Description :</Heading>
                    <Text fontSize={15} fontStyle={"italic"}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorum adipisci quis ut officiis facere inventore tempora nostrum magnam nemo maiores voluptatum cumque quaerat, placeat nulla, temporibus tenetur a enim!</Text>
                    <Accordion allowToggle defaultIndex={firstOpen ? [0] : []} mt={6} mb={10}>
                        <AccordionItem isFocusable={firstOpen}>
                            <AccordionButton borderRadius={10} _expanded={{ bgColor:"blue.100"}} onClick={()=>setfirstAccordian(false)} justifyContent={'space-between'} color={'blue.700'} fontWeight={'semibold'}>
                                Personal Attributes
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel >
                                <Flex gap={20}>
                                    <Flex direction={"column"}>
                                        <Text fontSize={15}><span style={{ fontWeight: "bold" }}>Name : </span>John Doe</Text>
                                        <Text fontSize={15}><span style={{ fontWeight: "bold" }}>Age : </span>25</Text>
                                        <Text fontSize={15}><span style={{ fontWeight: "bold" }}>DOB : </span>20/01/1996</Text>
                                    </Flex>
                                    <Flex direction={"column"}>
                                        <Text fontSize={15}><span style={{ fontWeight: "bold" }}>Occupation: </span>Dentist</Text>
                                        <Text fontSize={15}><span style={{ fontWeight: "bold" }}>Highest Level of Education : </span>Masters in Dental Science</Text>
                                    </Flex>
                                </Flex>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionButton borderRadius={10} _expanded={{ bgColor:"blue.100"}} onClick={()=>setfirstAccordian(true)} justifyContent={'space-between'} color={'blue.700'} fontWeight={'semibold'}>
                                Physical Attributes
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel>
                                <Flex gap={20}>
                                    <Flex direction={"column"}>
                                        <Text fontSize={15}><span style={{ fontWeight: "bold" }}>Height : </span>183 cm</Text>
                                        <Text fontSize={15}><span style={{ fontWeight: "bold" }}>Weight : </span>170 lbs</Text>
                                        <Text fontSize={15}><span style={{ fontWeight: "bold" }}>Eye Color : </span>Brown</Text>
                                    </Flex>
                                    <Flex direction={"column"}>
                                        <Text fontSize={15}><span style={{ fontWeight: "bold" }}>Hair Color: </span>Black</Text>
                                        <Text fontSize={15}><span style={{ fontWeight: "bold" }}>Hair Loss : </span>None</Text>
                                        <Text fontSize={15}><span style={{ fontWeight: "bold" }}>Hair Type : </span>Frizzy</Text>
                                    </Flex>
                                </Flex>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionButton borderRadius={10} _expanded={{ bgColor:"blue.100"}} onClick={()=>setfirstAccordian(true)} justifyContent={'space-between'} color={'blue.700'} fontWeight={'semibold'}>
                                Health Information
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto soluta numquam accusamus, nam, et quis sed deserunt, voluptates itaque dolore voluptatum molestiae. Doloremque animi omnis voluptatum? Id iure tempora hic!
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionButton borderRadius={10} _expanded={{ bgColor:"blue.100"}} onClick={()=>setfirstAccordian(true)} justifyContent={'space-between'} color={'blue.700'} fontWeight={'semibold'}>
                                Maternal Family
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto soluta numquam accusamus, nam, et quis sed deserunt, voluptates itaque dolore voluptatum molestiae. Doloremque animi omnis voluptatum? Id iure tempora hic!
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionButton borderRadius={10} _expanded={{ bgColor:"blue.100"}} onClick={()=>setfirstAccordian(true)} justifyContent={'space-between'} color={'blue.700'} fontWeight={'semibold'}>
                                Paternal family
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto soluta numquam accusamus, nam, et quis sed deserunt, voluptates itaque dolore voluptatum molestiae. Doloremque animi omnis voluptatum? Id iure tempora hic!
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