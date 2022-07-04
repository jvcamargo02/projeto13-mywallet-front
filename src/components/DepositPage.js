import { useContext, useState } from "react"
import axios from "axios"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import UserContext from "../context/UserContext"

export default function WithdrawPage() {

    const navigate = useNavigate()

    const {token} = useContext(UserContext)
    const [value, setValue] = useState("")
    const [description, setDescription] = useState("")

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    function onSubmit(e) {
        e.preventDefault()

        const promisse = axios.post("http://localhost:5000/cash-outflow", {
            value,
            description
        }, config )

        promisse.then(
            navigate("/home")
        )
    }

    return (
        <Container>
            <h2>New Cash Inflow</h2>
            <form onSubmit={onSubmit}>
                <input
                    required
                    type="number"
                    placeholder="Value"
                    onChange={(e) => setValue(e.target.value)}
                    value={value} />
                <input
                    required
                    type="text"
                    placeholder="Description"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description} />
                <button type="submit">
                    Cash Inflow
                </button>
            </form>
        </Container>
    )
}

const Container = styled.div`
    
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h2{
        color: #FFF;
        font-size: 25px;
        font-weight: 700;
    }

    form{
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-top: 40px;

    input{
        width: 326px;
        height: 58px;
        background-color: #FFF;
        border-radius: 5px;
        border: none;
        box-sizing: border-box;
        padding: 15px;
        font-size: 18px;
    }

    button{
            width: 326px;
            height: 58px;
            color: #FFF;
            background-color: var(--button-color);
            font-size: 20px;
            font-weight: 700;
            border-radius: 5px;
            border: none;
        }
}
`