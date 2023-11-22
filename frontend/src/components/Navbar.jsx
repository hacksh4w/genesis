import { Flex, Menu, MenuButton, MenuItem, MenuList, Text, Heading, Button, Input, useDisclosure, Box, HStack, Center, useColorMode, useColorModeValue, useToast } from '@chakra-ui/react'
import { ChevronDownIcon, DeleteIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router';
import { Avatar } from '@chakra-ui/react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { useRef, useState } from 'react';
import CartTile from './Cart/CartTile';
import { Link } from 'react-router-dom';
import { supabase } from '../config/config';
import { useAuth } from '../contexts/AuthContext';
const Navbar = (props) => {

  const AuthContext = useAuth()
  const userid=AuthContext.userID

  const navigate = useNavigate()
  const toast=useToast({})
  const [open, setDrawerOpen] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  const [dataCart,setDataCart]= useState({adopter_id:userid,donor_id:null,price:""})

  const addTransaction = async () =>{
    try {
      const updatedDataCart = { ...dataCart, adopter_id: userid }
      setDataCart(updatedDataCart);
      console.log(dataCart)
      const { error } = await supabase
          .from('Cart')
          .insert([updatedDataCart])

      if (error) {
          throw error;
      }
      console.log(error)
      toast({
          title: "Added transaction",
          status: "success",
          isClosable: true,
          position: "top"
      });

      onClose(); 
  } catch (error) {
      toast({
          title: "Failed to add",
          status: "error",
          isClosable: true,
          position: "top"
      });
  }
  }

  const handleChange = (e,field)=>{
    const updatedFormData = { ...dataCart, [field]: e };
    setDataCart(updatedFormData);
}

  return (
    <Flex bgColor={'blue.50'} mb={4} borderRadius={'30'} alignItems={'center'} p={4} justifyContent={'space-between'} boxShadow={'md'}>
      <Heading fontSize={'25'} onClick={() => navigate('/')} ml={10} color={'blue.300'}>Genesis</Heading>
      <Flex alignItems={'center'} w={500} justifyContent={'space-between'}>
        <Menu  >
          <MenuButton fontSize={'17'} as={Text} color={'blue.600'} >Donor<ChevronDownIcon fontSize={20} color={'blue.600'} /></MenuButton>
          <MenuList >
            <MenuItem _active={{ color: "blue.500" }} onClick={() => navigate('/donors')}>All Donors</MenuItem>
            <MenuItem _active={{ color: "blue.500" }} onClick={() => navigate("/donorapplication")}>Become Donor</MenuItem>
          </MenuList>
        </Menu>
        <Menu  >
          <MenuButton fontSize={'17'} as={Text} color={'blue.600'} >Adopter<ChevronDownIcon fontSize={20} color={'blue.600'} /></MenuButton>
          <MenuList >
            <MenuItem _active={{ color: "blue.500" }} onClick={() => navigate("/newadopterapplication")}>Become Adopter</MenuItem>
          </MenuList>
        </Menu>
        <Link to={'/clinics'}>
        <Text fontSize={'17'} color={'blue.600'}>Clinic Services</Text>
        </Link>
        <Menu  >
          <MenuButton><Avatar size={'sm'} bgColor={'blue.200'} cursor={'pointer'} /></MenuButton>
          {props.usertag=="donor"?<MenuList><MenuItem _active={{ color: "blue.500" }} onClick={()=>navigate("/donorprofilepage")}>Profile</MenuItem></MenuList>:props.usertag=="adopter"?<MenuList >
            <MenuItem _active={{ color: "blue.500" }} ref={btnRef} onClick={onOpen}>Cart</MenuItem>
            <MenuItem _active={{ color: "blue.500" }} onClick={() => navigate("/adopters")}>Profile</MenuItem>
          </MenuList>:<MenuList><MenuItem _active={{ color: "blue.500" }} >Profile</MenuItem></MenuList>}
        </Menu>

        <Button colorScheme="blue" borderRadius={'30'}>Log out</Button>
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size={'md'}

      >
        <DrawerOverlay />
        <DrawerContent borderTopLeftRadius={'12'} borderBottomRadius={'12'} >
          <DrawerCloseButton />

          <DrawerBody mt={100} ml={30}>
            <Input placeholder='enter donor id' onChange={(e)=>handleChange(Number(e.target.value),"donor_id")}/>
            <Text>Price for one Vial :  $100</Text>
            <Input onChange={(e)=>handleChange(e.target.value,"price")}></Input>
          </DrawerBody>

          <Center>
          <DrawerFooter mb={90}>
            <Button w={200} borderRadius={30} colorScheme='blue' //onClick={()} 
             h={50} onClick={addTransaction}>Pay Now</Button>
          </DrawerFooter>
          </Center>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

export default Navbar;