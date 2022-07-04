import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { MdOutlineLogout, MdAddCircleOutline, MdRemoveCircleOutline } from 'react-icons/md'
import Statement from './StatementBox'

export default function HomePage() {

    const navigate = useNavigate()

    return (
        <Container>
            <span>Hello, Fulano</span>
            <MdOutlineLogout onClick={() => navigate('/')}/>
            <Statement />
            <StatementsButtons>
                <Link to="/cash-inflow">
                    <MdAddCircleOutline />
                    <h6>New Cash</h6>
                    <h6>Inflow</h6>
                </Link>
                <Link to="/cash-outflow">
                    <MdRemoveCircleOutline />
                    <h6>New Cash</h6>
                    <h6>Outflow</h6>
                </Link>
            </StatementsButtons>
        </Container>
    )
}


const Container = styled.div`

    width: 100vw;
    max-width: 600px;
    height: 100vh;
    box-sizing: border-box;
    padding: 25px;
    margin-left: auto; margin-right: auto;

    span{
        width: fit-content;
        color: #FFF;
        font-size: 25px;
        font-weight: 700;
    }

    svg{
        color: #FFF;
        float: right;
        font-size: 25px;
        cursor: pointer;
    }
`

const StatementsButtons = styled.div`

    height: 20%;
    width: 100%;
    display: flex;
    gap: 10px;

    a{  
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        height: 100%;
        width: 50%;
        color: #FFF;
        background-color: var(--button-color);
        font-size: 19px;
        font-weight: 700;
        line-height: 20px;
        box-sizing: border-box;
        padding: 10px;
        text-decoration: none;
        border-radius: 5px;
        position: relative;
         
        svg{
            float: left;
            font-size: 35px ;
            position: absolute;
            top: 10px;
        }
    }

`
