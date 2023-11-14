import {Tag, TagLabel} from '@chakra-ui/react'
import { useState } from 'react';
const FilterTag = (props) => {
    const [tagTheme, setTagTheme] = useState(false)
    const handleTagTheme = () =>{
        setTagTheme(!tagTheme)
    }
    return (
        <Tag borderRadius={20} colorScheme={tagTheme==true?"blue":"gray"}>
            <TagLabel onClick={() => handleTagTheme()} cursor={"pointer"} >{props.name}</TagLabel>
        </Tag>
    );
}

export default FilterTag;