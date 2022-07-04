import { useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import styled from "styled-components"


export default function Statement() {

    const [content, setContent] = useState(<PulseLoader color="#8C11BE"/>)

    return (
        <Container>
            {content}
        </Container>
    )
}

const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    margin: 25px 0 15px 0;
    height: 68%;
    background-color: #FFF;
    border-radius: 5px;

    
`