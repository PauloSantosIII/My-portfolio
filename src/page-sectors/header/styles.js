import styled from 'styled-components'

export const ClientMenu = styled('div')`
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