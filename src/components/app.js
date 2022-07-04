import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserContext from "../context/UserContext"
import GlobalStyle from '../globalStyles/reset'
import SignInPage from './SignInPage'
import SignUpPage from './SignUpPage'
import HomePage from './HomePage'
import DepositPage from './DepositPage'
import WithdrawPage from './WithdrawPage'

export default function App() {

    const [token, setToken] = useState("")
    const [name, setName] = useState("")

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <UserContext.Provider value={{ token, setToken, name, setName }}>
                    <Routes>
                        <Route path="/" element={<SignInPage />} />
                        <Route path="/sign-up" element={<SignUpPage />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/cash-inflow" element={<DepositPage />} />
                        <Route path="/cash-outflow" element={<WithdrawPage />} />
                    </Routes>
                </UserContext.Provider>
            </BrowserRouter>
        </>
    )
}