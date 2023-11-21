import { Stepper, Step, StepIndicator, StepStatus, StepNumber, StepIcon, Box, StepSeparator, StepTitle, StepDescription, useSteps, Flex, Button, useToast, useDisclosure, Text, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router";
//import { Checkbox } from '@chakra-ui/react';
import Form1 from "./Form11";
import { useState } from "react";
import Form3 from "./Form33";
import Form2 from "./Form22";
// import {
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
// } from '@chakra-ui/react';
import { useAuth } from "../../contexts/AuthContext";
import { supabase } from "../../config/config";

const steps = [
  { title: 'First', description: 'Basic Information' },
  { title: 'Second', description: 'Spouse Details' },
  { title: 'Third', description: 'Medical History' },
  
];

const AdopterApplication2 = () => {

  const AuthContext=useAuth()
  const userId = AuthContext.userID


  //const { isOpen, onOpen, onClose } = useDisclosure();
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });
  const [currentPage, setPageNo] = useState(0);

  // State variables to track the checked state of checkboxes
  //const [isChecked1, setIsChecked1] = useState(false);
  //const [isChecked2, setIsChecked2] = useState(false);

  const handleNext = async () => {
    let i = currentPage;
    if(i==0){
        try{
            const { error: error1 } = await supabase.from('adopter_basic_info').insert([formData1]);
            console.log(formData1)
            if (error1) {
                throw error1;
             }
        }catch (error) {
            console.error('Error inserting data:', error);
            toast({
              title: 'Error inserting data',
              description: error.message || 'An error occurred while inserting data',
              status: 'error',
              isClosable: true,
              position: 'top',
            });
          }
    }
    if(i==1){
      const spouse1Details = {
        name: formData2.spouse1_name,
        spouse_no : 1,
        dob: formData2.spouse1_dob,
        email: formData2.spouse1_email,
        phone: formData2.spouse1_phone,
        aadhar: formData2.spouse1_aadhar,
        gender: formData2.spouse1_gender,
        blood_group: formData2.spouse1_blood,
    };

    const spouse2Details = {
        name: formData2.spouse2_name,
        spouse_no : 2,
        dob: formData2.spouse2_dob,
        email: formData2.spouse2_email,
        phone: formData2.spouse2_phone,
        aadhar: formData2.spouse2_aadhar,
        gender: formData2.spouse2_gender,
        blood_group: formData2.spouse2_blood,
    };

    const formattedData2 = [spouse1Details, spouse2Details];

    // Send formattedData to the backend
    // Add your API call or other logic here
    console.log("Sending data to the backend:", formattedData2);

        try{
            console.log(spouse1Details)
            console.log(spouse2Details)
            const { error: error1 } = await supabase.from('adopter_spouse_details').insert([spouse1Details]);
            const { error: error2 } = await supabase.from('adopter_spouse_details').insert([spouse2Details]);
            if (error1) {
                throw error1;
             }
             else if(error2){
                throw error2;
             }  
        }catch (error) {
            console.error('Error inserting data:', error);
            toast({
              title: 'Error inserting data',
              description: error.message || 'An error occurred while inserting data',
              status: 'error',
              isClosable: true,
              position: 'top',
            });
          }
    }
    i++;
    setPageNo(i)
    setActiveStep(i)
}

const handleBack = () =>{
    let j=currentPage
    j--
    setPageNo(j)
    setActiveStep(j)
}

const toast = useToast()
const navigate= useNavigate()
const handleSubmit = async () => {

    if(currentPage==2){
        try{
            const { error: error1 } = await supabase.from('adopter_medical_history').insert([formData3]);
            console.log(formData3)
            if (error1) {
                throw error1;
             }
        }catch (error) {
            console.error('Error inserting data:', error);
            toast({
              title: 'Error inserting data',
              description: error.message || 'An error occurred while inserting data',
              status: 'error',
              isClosable: true,
              position: 'top',
            });
          }
        try{
            const {error:error1} = await supabase.from('users')
            .update({ tag: 'donor' })
            .eq('id', userId)
            if (error1) {
                throw error1;
             }
        }
        catch (error) {
            console.error('Error inserting data:', error);
            toast({
              title: 'Error inserting data',
              description: error.message || 'An error occurred while inserting data',
              status: 'error',
              isClosable: true,
              position: 'top',
            });
          }
    }
    toast({
        title: "Registered Successfully",
        status: "success",
        isClosable: true,
        position: "top",
    })
    navigate(`/`)

}

const [formData1, setFormData1] = useState({});
const [formData2, setFormData2] = useState({});
const [formData3, setFormData3] = useState({});

const handleForm1DataChange = (data) => {
    setFormData1({
        ...data,
        user_id: userId, // Include userId in formData1
      }); // Update formData1 in the parent component
  };

  const handleForm2DataChange = (data) => {
    setFormData2({
        ...data,
        user_id: userId, // Include userId in formData1
      }); // Update formData1 in the parent component
  };

  const handleForm3DataChange = (data) => {
    setFormData3({
        ...data,
        user_id: userId, // Include userId in formData1
      }); // Update formData1 in the parent component
  };

  return (
    <>
      <Flex direction={'column'} h={'100vh'} p={10} alignItems={'center'}>
        <Stepper userid={userId} size='md' index={activeStep} gap={10} w={1100} mb={12} mt={7}>
          {steps.map((step, index) => (
            <Step key={index} onClick={() => setActiveStep(index)}>
              <StepIndicator>
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>

              <Box flexShrink='0'>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </Box>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>

        {currentPage === 0 ? <Form1 onFormDataChange={handleForm1DataChange} /> : currentPage === 1 ? <Form2 onFormDataChange={handleForm2DataChange} /> :  <Form3 onFormDataChange={handleForm3DataChange}/>  }
        <Flex w={600} alignItems={'center'} mt={20} gap={5} justify={'center'}>
          {currentPage !== 0 ? <Button colorScheme="blue" onClick={() => handleBack()}>Back</Button> : ""}
          {currentPage < 2 ? <Button colorScheme="blue" onClick={() => handleNext()}>Next</Button> : <Button colorScheme="green" /*onClick={onOpen}*/ onClick={()=>handleSubmit()} >Submit</Button>}
        </Flex>
      </Flex>
      {/*}
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} size={'2xl'} >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Center>TERMS AND CONDITIONS</Center>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex gap={3}>
              <Checkbox isChecked={isChecked1} onChange={handleCheckboxChange1}></Checkbox>
              <Text fontSize={14} fontWeight={'semibold'}>
                I, the recipient, hereby confirm that I have accepted the responsibility to provide informed consent, indicating my understanding of the implications, risks, and emotional considerations associated with using donor sperm. Furthermore, I acknowledge and agree to participate in counseling sessions aimed at addressing the psychological and emotional aspects of assisted reproductive technologies. Through this process, I affirm that I am fully informed about the potential challenges, responsibilities, and emotional considerations involved in utilizing donor sperm, and I am prepared to navigate these aspects throughout the fertility treatment journey.
              </Text>
            </Flex>
            <Flex gap={3} mt={10}>
              <Checkbox isChecked={isChecked2} onChange={handleCheckboxChange2}></Checkbox>
              <Text fontSize={14} fontWeight={'semibold'}>
                I, the recipient, hereby acknowledge that I have accepted the terms related to the identification of the sperm donor and any potential future contact agreements. I understand and agree to the conditions outlined in the agreement, including the decision on whether the donor's identity will remain anonymous or if there is an option for the child conceived with donor sperm to access information about the donor in the future. By accepting these terms, I affirm my understanding of the importance of deciding on the level of openness in donor-conceived relationships. I agree to abide by the terms specified in the agreement regarding any potential future contact between the child and the donor, ensuring clarity and understanding between all parties involved.
              </Text>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='green' mr={3} isDisabled={!isChecked1 || !isChecked2}>
              Proceed
            </Button>
          </ModalFooter>
        </ModalContent>
          </Modal> */}
    </>
  );
}

export default AdopterApplication2;
