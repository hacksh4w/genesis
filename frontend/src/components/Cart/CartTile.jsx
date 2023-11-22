import { AddIcon, DeleteIcon, MinusIcon } from "@chakra-ui/icons";
import { Box,Button,Flex,Text } from "@chakra-ui/react";
import { IoPersonCircleOutline } from "react-icons/io5";

const CartTile = () => {
    const handleDelete = ()=>{
        console.log("hi");
    }
    return ( 
        <Flex h={140}  gap={10} borderTopLeftRadius={'12'} borderBottomRadius={'12'} bg={'blue.50'} borderTopRightRadius={12} alignItems={'center'}>
              <Box borderRadius={50} bg={'blue.50'} h={70} w={70} ml={5} alignItems={'center'} justifyContent={'center'}>
                <IoPersonCircleOutline size={80} color="#BEE3F8"/>
              </Box>
              <Flex direction={'column'} >
                <Text fontSize={19} fontWeight={'semibold'}>Donor Id : 6</Text>
                <Flex alignItems={'center'} gap={5}>
                <Text fontSize={21} fontWeight={'bold'}>$ 145</Text>
                <Button size={10} sx={{all:'unset'}}><AddIcon color={'blue.300'}/></Button>
                <Button size={10} sx={{all:'unset'}}><MinusIcon color={'blue.300'}/></Button>
                </Flex>
              </Flex>
              <Box h={45} w={45} position={'relative'} top={47} right={-87} borderBottomEndRadius={12} borderTopLeftRadius={12} bgColor={'blue.100'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                <Button sx={{all:'unset'}} onClick={()=>handleDelete()}><DeleteIcon fontSize={'20'} color={'blue.500'} as="Button" /></Button>
              </Box>
            </Flex>
     );
}
 
export default CartTile;