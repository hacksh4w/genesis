import { Flex, Box, Image, Divider, AbsoluteCenter, Text, Heading, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import woman from '../../src/assets/woman1.avif'
const AdopterProf = () => {
    return (
        <Flex w={'100vw'} direction={'column'} h={'100vh'}>
            <Flex h={110} w={'100vw'} bgColor={'blue.100'}></Flex>
            <Box width={200} height={200} borderRadius='120' borderColor={'blue.100'} overflow='hidden' ml={"10%"} mt={-85} borderWidth={'10px'}>
                <Image src={woman} />
            </Box>
            <Flex gap={180} w={'85vw'}>
                <Flex direction={'column'} w={'42%'} mt={4} >
                    <Heading ml={130} fontSize={25} mb={5}>Adopter Id : 1234</Heading>
                    <Box position='relative' padding='5'>
                        <Divider borderWidth={1.5} borderColor={'blue.200'} />
                        <AbsoluteCenter px='4' color={'blue.800'} bg='white' fontWeight={'semibold'} >
                            Basic Information
                        </AbsoluteCenter>
                    </Box>
                    <Flex direction={'column'} ml={10}>
                        <Text fontSize={16}><span style={{ fontWeight: 'bolder' }}>Address : </span>Grace Villa, Kakkanad, Kochi</Text>
                        <Text fontSize={16}><span style={{ fontWeight: 'bolder' }}>City : </span>Kochi</Text>
                        <Text fontSize={16}><span style={{ fontWeight: 'bolder' }}>Country : </span>India</Text>
                        <Text fontSize={16}><span style={{ fontWeight: 'bolder' }}>Pincode : </span>682021</Text>
                    </Flex>

                    <Box position='relative' padding='5'>
                        <Divider borderWidth={1.5} borderColor={'blue.200'} />
                        <AbsoluteCenter px='4' color={'blue.800'} bg='white' fontWeight={'semibold'} >
                            Interests
                        </AbsoluteCenter>
                    </Box>
                    <Flex direction={'column'} ml={10}>
                        <Text fontSize={16} fontWeight={'semibold'}>Football</Text>
                        <Text fontSize={16} fontWeight={'semibold'}>Music</Text>
                        <Text fontSize={16} fontWeight={'semibold'}>Arts and Crafts</Text>
                    </Flex>
                </Flex>
                <Flex direction={'column'} mt={-20} w={470}>
                <Tabs variant={'soft-rounded'} >
                        <TabList>
                            <Tab w={135} >Parent 1</Tab>
                            <Tab w={135}>Parent 2</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel p={4}>
                                <Text fontSize={17}><span style={{ fontWeight: 'bolder' }}>Name : </span>John Doe</Text>
                                <Text fontSize={17}><span style={{ fontWeight: 'bolder' }}>Phone : </span>Kochi</Text>
                                <Text fontSize={17}><span style={{ fontWeight: 'bolder' }}>Email : </span>India</Text>
                                <Text fontSize={17}><span style={{ fontWeight: 'bolder' }}>Gender : </span>682021</Text>
                                <Text fontSize={17}><span style={{ fontWeight: 'bolder' }}>Age : </span>682021</Text>
                                <Text fontSize={17}><span style={{ fontWeight: 'bolder' }}>DOB : </span>682021</Text>
                                <Text fontSize={17}><span style={{ fontWeight: 'bolder' }}>Occupation : </span>682021</Text>
                                <Text fontSize={17}><span style={{ fontWeight: 'bolder' }}>Blood Group : </span>682021</Text>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default AdopterProf;