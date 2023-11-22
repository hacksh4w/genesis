import { Flex, Box, Image, Divider, AbsoluteCenter, Text, Heading, Tabs, TabList, Tab, TabPanels, TabPanel, Icon, HStack, useDisclosure,Button, Input } from "@chakra-ui/react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

  const Modal1=()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
        return(
            <Flex>
                                    
                                    <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent >
          <ModalHeader>Edit Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody  >
            <Flex direction={'column'} gap={5}>
                <Flex gap={10}>
                    <Text mt={2} fontWeight={'semibold'} >Name:</Text>
                    <Input h={8} w={60}></Input>
                </Flex>
                <Flex gap={8}>
                <Flex gap={2}>
                    <Text mt={2} fontWeight={'semibold'} >Phone:</Text>
                    <Input type="tel" h={8}></Input>
                </Flex>
                <Flex gap={6}>
                    <Text mt={2} fontWeight={'semibold'} >Email:</Text>
                    <Input type="email" h={8}></Input>
                </Flex>
                </Flex>
                <Flex gap={8}>
                <Flex gap={2}>
                    <Text mt={2} fontWeight={'semibold'} >Age:</Text>
                    <Input type="number" h={8}></Input>
                </Flex>
                <Flex gap={6}>
                    <Text mt={2} fontWeight={'semibold'} >DOB:</Text>
                    <Input type="text"></Input>
                </Flex>
                </Flex>
                <Flex gap={8}>
                <Flex gap={2}>
                    <Text mt={2} fontWeight={'semibold'} >Gender:</Text>
                    <Input type="text" h={8}></Input>
                </Flex>
                <Flex gap={6}>
                    <Text  mt={2} fontWeight={'semibold'} >Occupation:</Text>
                    <Input type="text" h={8}></Input>
                </Flex>
                </Flex>
                
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='green' mr={3} >
              Submit
            </Button>
            <Button colorScheme='blue' onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
            </Flex>
        )
  }
  export default Modal1