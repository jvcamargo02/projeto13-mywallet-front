import { useContext, useState, useEffect } from "react";
import axios from "axios"
import ClipLoader from "react-spinners/ClipLoader"; 
import styled from "styled-components"
import UserContext from "../context/UserContext";


export default function Statement() {

    const { token } = useContext(UserContext)
    const [content, setContent] = useState([])

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    useEffect(() => {
        const promisse = axios.get(`http://localhost:5000/home`, config)

        promisse.then((response) => success(response.data))
    }, [])

    function success(response) {

        console.log(response)

        if (response.length === 0) {
            return setContent([
                <Statement color="rgba(0,0,0,0.6)">
                    There are no records of cash inflows or outflows yet.
                </Statement>
            ])
        }

        setContent(response)
    }

    return (
        <Container>
            {content.length === 0 ? <ClipLoader color="#8C11BE"/> :
                <StatementBox>
                    {content.map((statement) =>
                        <Resume color={statement.type === "inflow" ? "green" : "red"}>
                            <span>04/07 - {statement.description}</span>
                            <p>{statement.value}</p>
                        </Resume>
                    )
                    }
                </StatementBox>
            }
        </Container>
    )
}

const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 25px 0 15px 0;
    height: 68%;
    background-color: #FFF;
    border-radius: 5px;
    
`

const StatementBox = styled.div`

    height: 100%;
    width: 100%;
`

const Resume = styled.div`

    span{
       color: #000
    }
`