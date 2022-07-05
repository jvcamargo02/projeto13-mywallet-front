import { useState, useContext } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import PulseLoader from "react-spinners/PulseLoader";
import { ToastContainer } from "react-toastify"
import { advice } from "./assets/toastifyFunctions";
import UserContext from "../context/UserContext"



export default function SignInPage() {

    const navigate = useNavigate()

    const {setToken, setName} = useContext(UserContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [buttonContent, setButtonContent] = useState("Log In")

    function success(data) {
        setToken(data.token)
        setName(data.name)

        navigate("/home")
    }

    function error(e) {
        advice(e.response.data)
        setButtonContent("Log In")
    }

    function onSubmit(e) {
        e.preventDefault()

        setButtonContent(<PulseLoader color="#FFF"/>)

        const promisse = axios.post("http://localhost:5000/", {
            email,
            password
        })

        promisse.then((response) => success(response.data))
        promisse.catch((e) => error(e))
    }

    return (
        <Container>

            <h1>MyWallet</h1>

            <form onSubmit={onSubmit}>
                <input
                    required
                    type="email"
                    placeholder="E-mail"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email} />
                <input
                    required
                    type="password"
                    placeholder="Senha"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password} />
                <button type="submit">
                    {buttonContent}
                </button>
            </form>
            <Link to="/sign-up">
                <h6>Don't have an account? Sign up</h6>
            </Link>
            <ToastContainer />
        </Container>
    )
}

const Container = styled.div`

    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #FFF;

    h1{
        font-family: var(--logo-font);
        font-size: 32px;
    }

    form{

        display: flex;
        flex-direction: column;
        gap: 15px;
        margin: 24px 0 36px 0;

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

    a{
        color: #FFF;
        font-weight: 700;
        font-size: 15px;
        text-decoration: none;
    }
`