import { useEffect, useState } from 'react';
import { supabase } from '../config/config'; 
import { useAuth } from "../contexts/AuthContext";
import { useToast } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

const RequestsTable = () => {
  const [requests, setRequests] = useState([]);
  const AuthContext=useAuth()
  const userId = AuthContext.userID
  const toast = useToast({})
  useEffect(() => {

    /*try {
        const { data:Data, error: errorData } = await supabase
            .from('adopter_basic_info')
            .select()
            .eq('user_id', userid)

        setbasicInfo(Data[0])

        if (errorData) throw errorData
    } catch (error) {
        toast({
            title: "failed to fetch adopter profile details",
            status: "error",
            isClosable: true,
            position: "top"
        }) */
    const fetchRequests = async () => {
      try {
        const { data:Data, error:errorData } = await supabase
                .from('requests')
                .select('*')
                //.eq('userId', userId);
            setRequests(Data[0])
        if (errorData) throw errorData
        else {
          setRequests(Data || []);
        } }catch(error) {
            toast({
                  title: "failed to fetch adopter profile details",
                  status: "error",
                  isClosable: true,
                  position: "top"
              })
      }
    };
    fetchRequests();
  }, []);

  const handleVerifyRequest = async (requestId) => {
    try {
      // Update the 'verified' field in the 'requests' table to true
      const { data, error } = await supabase
        .from('requests')
        .update({ verified: true })
        .eq('id', requestId);

      if (error) {
        console.error('Error updating request:', error);
      } else {
        console.log('Request verified successfully:', data);
        // Optional: Update local state to reflect the change
        setRequests((prevRequests) =>
          prevRequests.map((req) =>
            req.id === requestId ? { ...req, verified: true } : req
          )
        );
      }
    } catch (error) {
      console.error('Error updating request:', error.message);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Donor ID</th>
            <th>Sample ID</th>
            <th>Verified</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id}>
              <td>{request.id}</td>
              <td>{request.radopter_id}</td>
              <td>{request.rdonor_id}</td>
              <td>{request.rclinicadmin_id}</td>
              <td>{request.rsample_id}</td>
              <td >{request.verified ? 'Yes' : 'No'}</td>
              <td>
              {!request.verified ? (
                  <Button onClick={() => handleVerifyRequest(request.id)}>
                    Verify Request
                  </Button>
                ) : (
                    <Button disabled>Verified</Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestsTable;
