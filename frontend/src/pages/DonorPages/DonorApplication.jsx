import { Stepper, Step, StepIndicator, StepStatus, StepNumber, StepIcon, Box, StepSeparator, StepTitle, StepDescription, useSteps, Flex, Button, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import Form1 from "./Form1";
import { useState } from "react";
import Form3 from "./Form3";
import Form2 from "./Form2";
import { useAuth } from "../../contexts/AuthContext";
import { supabase } from "../../config/config";


const steps = [
    { title: 'First', description: 'Personal Details' },
    { title: 'Second', description: 'Physical Attributes' },
    { title: 'Third', description: 'Health Info' },
 
];
const DonorApplication = () => {
    const AuthContext=useAuth()
    const userId = AuthContext.userID
    

    const { activeStep, setActiveStep } = useSteps({
        index: 0,
        count: steps.length,
    })
    const [currentPage, setPageNo] = useState(0)
    const handleNext = async () => {
        let i = currentPage;
        if(i==0){
            try{
                const { error: error1 } = await supabase.from('donor_personal_info').insert([formData1]);
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
            try{
                const { error: error1 } = await supabase.from('donor_physical_attributes').insert([formData2]);
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
                const { error: error1 } = await supabase.from('donor_health_info').insert([formData3]);
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
        navigate(`/donors`)

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
                <Stepper size='md' index={activeStep} gap={10} w={1100} mb={12} mt={7}>
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

                {currentPage == 0 ? <Form1  onFormDataChange={handleForm1DataChange}/> : currentPage == 1 ? <Form2 onFormDataChange={handleForm2DataChange} /> :  <Form3 onFormDataChange={handleForm3DataChange}/>}
                <Flex w={600} alignItems={'center'} mt={5} gap={5} justify={'center'}>
                    {currentPage!=0?<Button colorScheme="blue" onClick={() => handleBack()}>Back</Button>:""}
                    {currentPage < 2 ? <Button colorScheme="blue" onClick={() => handleNext()}>Next</Button> : <Button colorScheme="green" onClick={()=>handleSubmit()}>Submit</Button>}
                </Flex>
            </Flex>
        </>
    );
}

export default DonorApplication;