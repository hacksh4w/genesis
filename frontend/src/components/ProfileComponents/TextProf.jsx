import { Text } from "@chakra-ui/react";

const TextProf = (props) => {
    return ( 
        <Text fontSize={17}><span style={{ fontWeight: 'bolder' }}>{props.title} : </span>{props.value}</Text>
     );
}
 
export default TextProf;