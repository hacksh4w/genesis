import { Divider, Flex, Heading, Input, InputGroup, InputRightAddon, useToast } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons'
import DonorTile from "../../components/Donor/DonorTile";

import FilterTag from "../../components/Donor/FilterTag";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { useAuth } from "../../contexts/AuthContext";
import { supabase } from "../../config/config";

const DonorCatalog = () => {
    const AuthContext =useAuth()
    const userId = AuthContext.userID
    const userTag=AuthContext.userTag

    const toast=useToast({})
    
    let donorList = [{
        donorId: 1001,
        name: "John",
    },
    {
        donorId: 1002,
        name: "Jane",
    },
    {
        donorId: 1003,
        name: "Mike",

    }

    ];
    let hairColorList = ["Auburn", "Green", "Black", "Blonde", "Brown", "Red"];
    let eyeColorList = ["Hazel", "Green", "Black", "Blue", "Brown"];

    const [donors, setDonors] = useState(donorList)

    const handleSearch = (e) => {
        const searchTerm = e;
        
        const newDonors = donorList.filter(
            (donor) =>
                donor.donorId.toString().includes(searchTerm) ||
                donor.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setDonors(newDonors)
    }

    useEffect(() => {
        const fetchDonors = async () => {
            try{
                const {data,error:errorData} = await supabase
                .from('users')
                .select('id,name')
                .eq('tag','donor')

                console.log(data)

                setDonors(data)
                if (errorData){ throw errorData}
            }catch(error){
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
            <Navbar userid={userId} usertag={userTag}/>
            <Flex>
                <Flex w={300} mr={10} p={4} direction={'column'} justifyContent={'space-evenly'} gap={5} minW={250}>
                    <Heading fontSize={20}>Filters</Heading>
                    <Divider />
                    <Heading fontSize={18}>Hair Colour</Heading>
                    <Flex wrap={'wrap'} gap={4}>
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
                            onChange={(e) => handleSearch(e.target.value)}
                        ></Input>
                        <InputRightAddon borderTopRightRadius={'30'} borderBottomRightRadius={'30'} color={'blue.50'}><SearchIcon onClick={handleSearch} color={'blue.500'} /></InputRightAddon>
                    </InputGroup>
                    <Flex flexWrap={'wrap'} gap={7}>
                        {donors && donors.map((donor) => (
                            <DonorTile key={donor.id} donorId={donor.id} donorName={donor.name} />
                        ))}
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default DonorCatalog;