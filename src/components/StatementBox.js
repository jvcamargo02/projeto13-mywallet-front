import { useContext, useState, useEffect } from "react";
import axios from "axios"
import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components"
import UserContext from "../context/UserContext";
import { isArray } from "util";


export default function Statement() {

    const {token} = useContext(UserContext)
    const [content, setContent] = useState(<ClipLoader color="#8C11BE" />)



    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    
    useEffect(() => {
        const promisse = axios.get(`http://localhost:5000/home`, config)

        promisse.then((response) => setContent(response.data.transactions))
    }, [])

    return (
        <Container>
            {isArray(content) ? content.map((teste) => {
                console.log(teste)
            })}
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