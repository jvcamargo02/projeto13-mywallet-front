import { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import styled from "styled-components"
import { advice } from "./assets/toastifyFunctions"
import PulseLoader from "react-spinners/PulseLoader";


export default function SignUpPage() {

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [buttonContent, setButtonContent] = useState("Create Account")


    function error(e) {
        advice(e.response.data)
        setPassword('')
        setEmail("")
        setPasswordConfirm("")
        setName("")
        setButtonContent("Create Account")
    }


    function onSubmit(e) {
        e.preventDefault()

        if (password !== passwordConfirm) {
            return advice("Those passwords didn't match. Try again.")
        }

        setButtonContent(<PulseLoader color="#FFF"/>)

        const promisse = axios.post("https://back-mywallet-13.herokuapp.com/sign-up", {
            name,
            email,
            password
        })

        promisse.then(() => navigate('/'))
        promisse.catch((e) => error(e))
    }

    return (
        <Container>

            <h1>MyWallet</h1>

            <form onSubmit={onSubmit}>
                <input
                    required
                    id="name"
                    type="text"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name} />
                <input
                    required
                    type="email"
                    placeholder="E-mail"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email} />
                <input
                    required
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password} />
                <input
                    required
                    type="password"
                    placeholder="Confirm Password"
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    value={passwordConfirm} />
                <button type="submit">
                    {buttonContent}
                </button>
            </form>
            <Link to="/">
                <h6>Already have an account? Login here</h6>
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
