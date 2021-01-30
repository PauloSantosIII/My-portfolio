import styled from 'styled-components'
import contact from '../../assets/images/contactbg.png'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: #282c34;
    background-image: url(${contact});
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Title = styled.h1`
    color: #fafafa;
    text-decoration: underline;
    font-size: 50px;
    margin: 40px 0px 0px 0px;

    @media (max-width: 600px) {
        font-size: 30px;
    }
`
export const ContactP = styled.p`
    color: #fafafa;
    margin: 20px 0px 20px 0px;
    text-align: center;

    @media (max-width: 700px) {
        max-width: 400px;
    }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;

    @media (max-width: 600px) {
        width: 300px;
    }
`
export const Label = styled.label`
    font-size: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 600px) {
        width: 300px;
    }
`
export const Input = styled.input`
    margin-left: 20px;
    height: 40px;
    width: 500px;
    border-radius: 20px;
    margin-top: 20px;
    font-size: 16px;
    padding: 0 0 0 15px;

    @media (max-width: 600px) {
        height: 30px;
    }

    &:focus {
        box-shadow: 1px 1px 4px 1px white;
        background: whitesmoke;
    }
`
export const TextArea = styled.textarea`
    margin-left: 20px;
    height: 80px;
    width: 500px;
    border-radius: 20px;
    margin-top: 20px;
    font-size: 16px;
    padding: 15px 0 0 15px;

    &:focus {
        box-shadow: 1px 1px 4px 1px white;
        background: whitesmoke;
    }
`
export const Button = styled.button`
    background: #61dafb;
    color: #282c34;
    height: 60px;
    width: 300px;
    border-radius: 25px;
    margin-top: 20px;
    margin-bottom: 40px;
    font-size: 24px;
    border: none;
    cursor: pointer;

    &:hover {
        font-weight: bold;
        border: 3px solid #282c34;
        box-shadow: 0 0 3px #61dafb;
    }

    @media (max-width: 600px) {
        width: 200px;
        height: 40px;
        font-size: 16px;
    }
`
export const Menu = styled.div`
    width: 50vw;
    height: 100%;
    display: flex;
    border-top: 3px solid #61dafb;
    margin: 40px 0 40px 30%;

    @media (max-width: 740px) {
        font-size: 10px;
        margin-top: 15px;
    }
`
Menu.Left = styled.div`
    display: flex;
    flex-direction: column;
    color: #61dafb;
    font-weight: bold;
    width: 35%;
    margin-left: 10%;

    a {
        text-decoration: none;
        color: #fafafa;
        font-weight: normal;
        cursor: pointer;
    }

    a:visited {
        text-decoration: none;
        color: #fafafa;
    }

    a:hover {
        color: #61dafb;
    }
`
Menu.Center = styled.div`
    display: flex;
    flex-direction: column;
    color: #61dafb;
    font-weight: bold;
    width: 35%;
    margin-left: 10%;

    a {
        text-decoration: none;
        color: #fafafa;
        font-weight: normal;
        cursor: pointer;
    }

    a:visited {
        text-decoration: none;
        color: #fafafa;
    }

    a:hover {
        color: #61dafb;
    }
`
export const HLogo = styled.img`
    position: absolute;
    width: 30%;
    left: 10vw;
`