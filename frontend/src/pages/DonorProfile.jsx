import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import {AiOutlineHeart,AiFillHeart} from "react-icons/ai"
const DonorProfile = () => {
    const[heartToggle,setHeartToggle]=useState(false)
    const handleHeartToggle = () => {
        setHeartToggle(!heartToggle);
    }
    return ( 
        <>
        <Flex justifyContent={'start'}  p={10} w={"100vw"} gap={10} >
            <Flex direction={'column'} alignItems={'center'} bgColor={'blue.50'} p={20} borderTopLeftRadius={20} borderBottomLeftRadius={20} >
                <Button bgColor={'blue.50'} _hover={{bgColor:"blue.50"}}  borderRadius={100} left={-120} top={-38} onClick={()=>handleHeartToggle()}>{heartToggle==true?<AiFillHeart size={"2rem"} color={"skyblue"}/>:<AiOutlineHeart size={"2rem"} color={"skyblue"}/>} </Button>
                <Box bgColor={'blue.100'} h={200} w={200} borderRadius={100} mb={10}></Box>
                <Heading fontSize={25} color={'blue.800'}>Donor Id : 1001</Heading>
                <Heading>John Doe</Heading>
            </Flex>
            <Flex direction={'column'}>
                <Heading fontSize={30} color={'blue.800'} mb={5}>Description :</Heading>
                <Text fontSize={15} fontStyle={"italic"}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorum adipisci quis ut officiis facere inventore tempora nostrum magnam nemo maiores voluptatum cumque quaerat, placeat nulla, temporibus tenetur a enim!</Text>
                <Button p={5} w={120} colorScheme="blue" borderRadius={20}>Add to Cart</Button>
            </Flex>
        </Flex>
        
        </>
     );
}
 
export default DonorProfile;