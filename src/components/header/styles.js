import styled from 'styled-components'
import header from '../../assets/images/headerbg.png'

export const Introduce = styled.div`
    width: 100vw;
    height: 100vh;
    color: #fafafa;
    background-color: #282c34;
    background-image: url(${header});
    background-size: cover;
`
export const Menu = styled.div`
    width: 80vw;
    height: 50px;
    margin-left: 10vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    font-weight: bold;
    position: relative;
    top: 20px;
`
export const SocialMenu = styled(Menu)`
    font-size: 26px;
    width: 14vw;
    top: 2px;

    a {
        text-decoration: none;
        color: #fafafa;
        cursor: pointer;
    }

    a:visited {
        text-decoration: none;
        color: #fafafa;
    }

    a:hover {
        color: #61dafb;
    }

    @media (max-width: 700px) {
        width: 35vw;
    }
`
export const ClientMenu = styled(Menu)`
    font-size: 13px;
    width: 14vw;
    top: 2px;
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 0;
    margin-right: 10vw;

    p {
        margin: 0;
        text-decoration: underline;
        font-weight: bold;
        color: #61dafb;
    }

    a {
        text-decoration: none;
        color: #fafafa;
        cursor: pointer;
        margin: 0 10px;
    }

    a:visited {
        text-decoration: none;
        color: #fafafa;
    }

    a:hover {
        color: #61dafb;
    }

    @media (max-width: 700px) {
        width: 35vw;
    }
`
export const Span = styled.span`
    width: 16vw;
    height: 50px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        text-decoration: none;
        color: #fafafa;
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
export const Logo = styled.img`
    margin: 300px 20% 0 20%;
    width: 60%;    
`