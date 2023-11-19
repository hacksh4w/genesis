import { Box, Button, Flex, Text} from "@chakra-ui/react";
import { useNavigate } from "react-router";
const ClinicTile = (props) => {
    const navigate = useNavigate()
    const handleClick = ()=>{
        navigate(`/clinics/${props.clinicId}`, { state: { clinicId: props.clinicId } });
    }
    return (
        <Flex h={350} w={215}  bgColor={'blue.50'} borderRadius={'10'} p={4} direction={'column'} alignItems={"center"}  justifyContent={'space-between'}>
            <Box bgColor={'blue.100'} w={'100px'} h={'100px'} borderRadius={'full'}  mb={2}></Box>
            <Flex direction={'column'} w={190} justify={'flex-start'} >
                <Flex >
                    <Text mr={4} fontSize={'17'} fontWeight={'bold'} textColor={'blue.800'}>{props.clinicId}</Text>
                    <Text fontSize={'17'} textColor={'blue.800'}>{props.clinicName}</Text>
                </Flex>
                <Flex >
                </Flex>
                <Flex>
                    <Text mr={4} fontSize={'13'} fontWeight={'bold'} textColor={'blue.800'}>Location:</Text>
                    <Text fontSize={'13'} textColor={'blue.800'}>{props.location}</Text>
                </Flex>
                <Flex>
                    <Text mr={4} fontSize={'13'} fontWeight={'bold'} textColor={'blue.800'}>Services : </Text>
                    <Text fontSize={'13'} textColor={'blue.800'}>{props.service}</Text>
                </Flex>
                <Flex>
                    <Text mr={4} fontSize={'13'} fontWeight={'bold'} textColor={'blue.800'}>Telephone: </Text>
                    <Text fontSize={'13'} textColor={'blue.800'}>{props.telephone}</Text>
                </Flex>
                <Flex mt={5}>

                </Flex>
            </Flex>
            <Button colorScheme="blue" mt={3} borderRadius={'20'} onClick={()=>handleClick()}>View</Button>
        </Flex>
    );
}
export default ClinicTile