import { Box, Button, Divider, Flex, Heading, Image, Input, InputGroup, InputRightAddon, Text, useToast } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons'
import DonorTile from "../../components/Donor/DonorTile";
import image1 from "../../assets/image1.svg"
import FilterTag from "../../components/Donor/FilterTag";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { useAuth } from "../../contexts/AuthContext";
import { supabase } from "../../config/config";
import { useNavigate } from "react-router";

const DonorCatalog = () => {
    const AuthContext = useAuth()
    const userId = AuthContext.userID
    const userTag = AuthContext.userTag

    const navigate = useNavigate()

    const toast = useToast({})

    let hairColorList = ["Auburn", "Green", "Black", "Blonde", "Brown", "Red"];
    let eyeColorList = ["Hazel", "Green", "Black", "Blue", "Brown"];

    const [donors, setDonors] = useState([])
    const [filteredDonors, setFilteredDonors] = useState([]);

    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();

        const filtered = donors.filter(
            (donor) =>
                donor.name.toLowerCase().includes(searchTerm) ||
                donor.id.toString().includes(searchTerm)
        );
        setFilteredDonors(filtered);
    };


    useEffect(() => {
        const fetchDonors = async () => {
            try {
                const { data, error: errorData } = await supabase
                    .from('users')
                    .select('id,name')
                    .eq('tag', 'donor')

                console.log(data)

                setDonors(data)
                setFilteredDonors(data);
                if (errorData) { throw errorData }
            } catch (error) {
                toast({
                    title: 'Error fetching',
                    description: error.message || 'An error occurred while inserting data',
                    status: 'error',
                    isClosable: true,
                    position: 'top',
                });
            }

        }
        fetchDonors()
    }, [])

    return (
        <Flex direction={'column'} p={7} h={'100vh'} w={'100vw'} >
            <Navbar userid={userId} usertag={userTag} />
            <Flex>
                <Flex w={200} maxH={400} mr={5} p={4} direction={'column'} justifyContent={'space-evenly'}  gap={5} minW={250}>
                    <Divider />
                    <Heading fontSize={18}>Hair Colour</Heading>
                    <Flex wrap={'wrap'} gap={4} >
                        {hairColorList && hairColorList.map((color) => (
                            <FilterTag key={color} name={color} />
                        ))}
                    </Flex>
                    <Divider />
                    <Heading fontSize={18}>Eye Colour</Heading>
                    <Flex wrap={'wrap'} gap={4}>
                        {eyeColorList && eyeColorList.map((color) => (
                            <FilterTag key={color} name={color} />
                        ))}
                    </Flex>
                </Flex>
                <Flex direction={'column'}>
                    <InputGroup w={600} mb={7}>
                        <Input placeholder="search" borderRadius={'30'}
                            onChange={handleSearch}
                        ></Input>
                        <InputRightAddon borderTopRightRadius={'30'} borderBottomRightRadius={'30'} color={'blue.50'}><SearchIcon onClick={handleSearch} color={'blue.500'} /></InputRightAddon>
                    </InputGroup>
                    <Flex flexWrap={'wrap'} gap={7}>
                        {(filteredDonors.length > 0 ? filteredDonors : donors).map(
                            (donor) => (
                                <DonorTile
                                    key={donor.id}
                                    donorId={donor.id}
                                    donorName={donor.name}
                                />
                            )
                        )}
                    </Flex>
                </Flex>
                <Flex maxH={460} w={350} ml={10}direction={'column'} alignItems={'center'} bgColor={'blue.50'} p={10} borderRadius={15} boxShadow={'sm'}>
                        <Image src={image1} h={200} w={200} mb={10}></Image>
                        <Text fontSize={18} mb={5} color="blue.600">Become a donor now</Text>
                        <Button colorScheme="blue" borderRadius={20} onClick={()=>navigate('/donorapplication')} >Apply</Button>
                    </Flex>
            </Flex>
        </Flex>
    );
}

export default DonorCatalog;