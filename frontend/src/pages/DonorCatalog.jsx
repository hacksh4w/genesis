import {  Divider, Flex, Heading, Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import {  SearchIcon } from '@chakra-ui/icons'
import DonorTile from "../components/Donor/DonorTile";

import FilterTag from "../components/Donor/FilterTag";
import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";

const DonorCatalog = () => {
    let donorList = [{
        donorId: 1001,
        name: "John",
        height: 175,
        weight: 70,
        bloodGroup: "A+",
        hairColor: "Brown",
        hairLength: "Short",
        eyeColor: "Blue",
    },
    {
        donorId: 1002,
        name: "Jane",
        height: 160,
        weight: 55,
        bloodGroup: "B-",
        hairColor: "Black",
        hairLength: "Long",
        eyeColor: "Green",
    },
    {
        donorId: 1003,
        name: "Mike",
        height: 180,
        weight: 80,
        bloodGroup: "O+",
        hairColor: "Blonde",
        hairLength: "Medium",
        eyeColor: "Brown",
    }
    
];
    let hairColorList = ["Auburn", "Green", "Black", "Blonde", "Brown", "Red"];
    let eyeColorList = ["Hazel", "Green", "Black", "Blue", "Brown"];
    
    const[donors,setDonors] = useState(donorList)
    const[d,setDonor]=useState("")

    const handleSearch=()=>{
        const newDonors=donors.filter(donor => donor.donorId.toString() === d)
        setDonors(newDonors)
    }
    const searchFieldClear=()=>{
        setDonors(donorList)
    }
    
    return (
        <Flex direction={'column'} p={7} h={'100vh'} w={'100vw'} >
            <Navbar/>
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
                        <Input placeholder="search by Id" borderRadius={'30'}
                            onChange={(e) => e.target.value ? setDonor(e.target.value) : searchFieldClear()}
                        ></Input>
                        <InputRightAddon borderTopRightRadius={'30'} borderBottomRightRadius={'30'}><SearchIcon onClick={handleSearch}/></InputRightAddon>
                    </InputGroup>
                    <Flex flexWrap={'wrap'} gap={7}>
                        {donors && donors.map((donor) => (
                            <DonorTile key={donor.donorId} donorId={donor.donorId} donorName={donor.name} height={donor.height}
                                weight={donor.weight} bloodGroup={donor.bloodGroup} hairColor={donor.hairColor}
                                hairLength={donor.hairLength} eyeColor={donor.eyeColor} />
                        ))}
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default DonorCatalog;