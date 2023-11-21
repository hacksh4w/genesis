import { Box, Button, Flex, Text} from "@chakra-ui/react";
import {  IoPersonCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router";

const DonorTile = (props) => {
    const navigate = useNavigate()
    const handleClick = ()=>{
        navigate(`/donors/${props.donorId}`, { state: { donorId: props.donorId } });
    }
    return (
        <Flex h={210} w={100} minW={190} bgColor={'blue.50'} borderRadius={'10'} p={4} direction={'column'} alignItems={"center"}  justifyContent={'space-between'} boxShadow={'md'}>
            <Box bgColor={'blue.50'} w={87} h={87} borderRadius={'100'} mb={5} alignItems={'center'} justifyContent={'center'}><IoPersonCircleOutline size={87} color="#BEE3F8"/></Box>
            <Flex direction={'column'} w={190} justify={'flex-start'} >
                <Flex alignItems={'cener'} justify={'center'}>
                    <Text mr={4} fontSize={'17'} fontWeight={'bold'} textColor={'blue.800'}>{props.donorId}</Text>
                    <Text fontSize={'17'} textColor={'blue.800'}>{props.donorName}</Text>
                </Flex>

            </Flex>
                
            <Button colorScheme="blue" mt={3} borderRadius={'20'} onClick={()=>handleClick()}>View</Button>
        </Flex>
    );
}

export default DonorTile;