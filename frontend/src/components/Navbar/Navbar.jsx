import { Flex, Menu, MenuButton, MenuItem, MenuList, Text, Heading, Button, Input, useDisclosure, Box, HStack, Center, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { ChevronDownIcon, DeleteIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router';
import woman from '../../assets/woman1.avif'
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
const Navbar = () => {
  const navigate = useNavigate()
  const [open, setDrawerOpen] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
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

        <Menu  >
          <MenuButton><Avatar size={'sm'} bgColor={'blue.200'} cursor={'pointer'} /></MenuButton>
          <MenuList >
            <MenuItem _active={{ color: "blue.500" }} ref={btnRef} onClick={onOpen}>Cart</MenuItem>
            <MenuItem _active={{ color: "blue.500" }} >Profile</MenuItem>
          </MenuList>
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
            <Flex h={140}  gap={10} borderTopLeftRadius={'12'} borderBottomRadius={'12'} bg={'blue.50'} borderTopRightRadius={12} alignItems={'center'}>
              <Box borderRadius={50} bg={'blue.200'} h={70} w={70} ml={5}></Box>
              <Flex direction={'column'} >
                <Text fontSize={19} fontWeight={'semibold'}>Donor Id : 1234</Text>
                <Text fontSize={21} fontWeight={'bold'}>$ 145</Text>
              </Flex>
              <Box h={45} w={45} position={'relative'} top={47} right={-87} borderBottomEndRadius={12} borderTopLeftRadius={12} bgColor={'blue.100'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                <DeleteIcon fontSize={'20'} color={'blue.500'}/>
              </Box>
            </Flex>

          </DrawerBody>

          <Center>
          <DrawerFooter mb={90}>
            <Button w={200} borderRadius={30} colorScheme='blue' h={50}>Pay Now</Button>
          </DrawerFooter>
          </Center>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

export default Navbar;