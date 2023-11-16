import { Box, Button, Flex, Text} from "@chakra-ui/react";
import { useNavigate } from "react-router";

const DonorTile = (props) => {
    const navigate = useNavigate()
    return (
        <Flex h={280} w={215} minW={190} bgColor={'blue.50'} borderRadius={'10'} p={4} direction={'column'} alignItems={"center"}  justifyContent={'space-between'}>
            <Box bgColor={'blue.100'} w={100} h={100} borderRadius={'100'} mb={5}></Box>
            <Flex direction={'column'} w={190} justify={'flex-start'} >
                <Flex>
                    <Text mr={4} fontSize={'17'} fontWeight={'bold'} textColor={'blue.800'}>{props.donorId}</Text>
                    <Text fontSize={'17'} textColor={'blue.800'}>{props.donorName}</Text>
                </Flex>
                <Text fontSize={'14'} textColor={'blue.800'}>{props.height}cm  |  {props.weight}lbs  |  {props.bloodGroup}</Text>
                <Flex>
                    <Text mr={4} fontSize={'13'} fontWeight={'bold'} textColor={'blue.800'}>Hair : </Text>
                    <Text fontSize={'13'} textColor={'blue.800'}>{props.hairColor}, {props.hairLength}</Text>
                </Flex>
                <Flex>
                    <Text mr={4} fontSize={'13'} fontWeight={'bold'} textColor={'blue.800'}>Eyes : </Text>
                    <Text fontSize={'13'} textColor={'blue.800'}>{props.eyeColor}</Text>
                </Flex>
            </Flex>
            <Button colorScheme="blue" mt={3} borderRadius={'20'} onClick={()=>navigate(`/donors/${props.donorId}`)}>View</Button>
        </Flex>
    );
}

export default DonorTile;