import {Flex,Menu, MenuButton, MenuItem, MenuList, Text,Heading,Button, Avatar} from '@chakra-ui/react'
import { ChevronDownIcon} from '@chakra-ui/icons'
import { useNavigate } from 'react-router';
import woman from '../../assets/woman1.avif'
const Navbar = () => {
    const navigate = useNavigate()
    return ( 
        <Flex bgColor={'blue.50'} mb={4} borderRadius={'30'} alignItems={'center'} p={4} justifyContent={'space-between'} >

            <Heading fontSize={'25'} ml={10}>Logo</Heading>
            <Flex alignItems={'center'} w={500} justifyContent={'space-between'}>
                <Menu  >
                    <MenuButton fontSize={'17'} as={Text} color={'blue.600'} >Donor<ChevronDownIcon fontSize={20} color={'blue.600'} /></MenuButton>
                    <MenuList >
                        <MenuItem _active={{ color: "blue.500" }} onClick={() => navigate('/donors')}>All Donors</MenuItem>
                        <MenuItem _active={{ color: "blue.500" }} onClick={() => navigate("/donorapplication")}>Become Donor</MenuItem>
                    </MenuList>
                </Menu>
                <Text fontSize={'17'} color={'blue.600'}>Adopter</Text>
                <Text fontSize={'17'} color={'blue.600'}>Clinic Services</Text>
                
                <Avatar size={'sm'} bgColor={'blue.200'} ref={btnRef} onClick={onOpen} cursor={'pointer'}/>
               
                   
                <Button colorScheme="blue" borderRadius={'30'}>Log out</Button>
            </Flex>
     );
}

export default Navbar;