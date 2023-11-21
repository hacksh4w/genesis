import React from 'react'
import { Divider, Flex, Heading, Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons'
import ClinicTile from '../../components/Clinic/ClinicTile'
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
const ClinicCatalog = () => {
    let clinicList = [{
        clinicId: 240,
        clinicName: "Pride Angel Ltd",
        location: "UK",
        service: "Donor Conception",
        description:"Pride Angel is a connection service for anyone wishing to become parents. Registration is free, and we also have a new families membership area",
        telephone: 75225368744,

    },
    {
        clinicId: 487,
        clinicName: "OVOBANK Ltd",
        location: "Spain",
        service: "Sperm Banks",
        description:"Ovobank ID makes it possible to optimize egg donation treatments to the maximum thanks to its extensive donor database.",
        telephone: 441613941303,
    },
    {
        clinicId: 622,
        clinicName: "Hegde Fertility",
        location: "India",
        service: "Fertility Clinics",
        description:"Hegde Fertility Center is an infertility clinic in Hyderabad. Which is successfully running by doctors like Dr. Vandanna Hegde, Dr. Pranasth Hegde.",
        telephone: "4033195500",
    },
    {
        clinicId: 756,
        clinicName: "Mathrutva Fertility Center ",
        location: "India",
        service: "Fertility Clinics",
        description:"Hegde Fertility Center is an infertility clinic in Hyderabad. Which is successfully running by doctors like Dr. Vandanna Hegde, Dr. Pranasth Hegde.",
        telephone: "+91-9100222604",
    },


    ];
    const [clinics, setClinics] = useState(clinicList)
    const handleSearch=(e)=>{
        const searchTerm=e;
        const newClinics = donorList.filter(
            (clinic) =>
              clinic.clinicId.toString().includes(searchTerm) ||
              clinic.Name.toLowerCase().includes(searchTerm.toLowerCase())
          );
        setClinics(newClinics)
    }
   
        return (
            <Flex direction={'column'} p={7} h={'100vh'} w={'100vw'} >
                
                <Navbar />
                <Flex flexWrap={'wrap'} gap={7}>
                        {clinics && clinics.map((clinic) => (
                            <ClinicTile key={clinic.clinicId} clinicId={clinic.clinicId} clinicName={clinic.clinicName} location={clinic.location}
                                service={clinic.service} telephone={clinic.telephone} description={clinic.description} />
                        ))}
                    </Flex>
                
            </Flex>
        )
    }


    export default ClinicCatalog