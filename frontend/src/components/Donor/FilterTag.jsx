import {Tag, TagCloseButton, TagLabel} from '@chakra-ui/react'
import { useState } from 'react';
const FilterTag = (props) => {
    const [tagTheme, setTagTheme] = useState("gray")
    return (
        <Tag borderRadius={20} colorScheme={tagTheme}>
            <TagLabel onClick={() => setTagTheme("blue")} cursor={"pointer"}>{props.name}</TagLabel>
            <TagCloseButton onClick={() => setTagTheme("gray")} />
        </Tag>
    );
}

export default FilterTag;