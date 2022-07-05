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
        console.log("vou entrar na promisse")
        const promisse = axios.get(`http://localhost:5000/home`, config)

        promisse.then((response) => setContent(response.data))
    }, [])


    function amount() {
        let amount = 0

        content.map(cashFlow =>

            amount = amount + (cashFlow.value)

        )

        return amount
    }

    console.log(content)
    console.log(content.length)

    return (
        <Container>
            {content.length === 0 ?

                <h1>
                    There are no records of cash inflows or outflows yet.
                </h1>

                :

                <StatementBox>
                    <main>
                    {content.map((statement, index) =>
                        <Resume key={index} color={statement.type === "inflow" ? "green" : "red"}>
                            <span>{statement.date}</span>
                            <span>{statement.description}</span>
                            <span>{statement.value}</span>
                        </Resume>
                    )
                        }
                    </main>
                    <p>BALANCE</p>
                    <p>{amount()}</p>
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
    box-sizing: border-box;
    padding: 15px;
    position: relative;

    h1{
        width: 180px;
        height: 46px;
        font-size: 20px;
        text-align: center;
        color: rgba(0,0,0,0.4);
    }
`

const StatementBox = styled.div`

    height: 100%;
    width: 100%;
    position: relative;
    box-sizing: border-box;
    
    
    p{  
        position: absolute;
        bottom: 0;
        font-weight: 700;
        font-size: 17px;
    }

    p:last-child{
        color: ${props => props.children[2].props.children > 0 ? "green" : "red"};
        right: 0;
    }

    main{
        height: 95%;
        overflow-y: auto;
    }
`

const Resume = styled.div`

    span{
       color: #000;
       font-size: 16px;
    }

    span:nth-child(2n-1){
        color: rgba(0,0,0,0.6);
        margin-right: 10px
    }

    span:nth-child(3n){
        float: right;
        color: ${props => props.color}
    }
`
