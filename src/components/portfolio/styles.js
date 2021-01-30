import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    text-align: center;
    align-items: center;
    border: 1px solid #282c34;
`

export const Card = styled.div`
    width: 30vw;
    height: 25vh;
        
    img {
        width: 100%;
        height: 100%;
        border: 3px solid #fff;
        object-position: top;
        object-fit: cover;
        cursor: pointer;
    }
`

export const Title = styled.h1`
    color: #282c34;
    text-decoration: underline;
    font-size: 50px;

    @media (max-width: 600px) {
        font-size: 30px;
    }
`

export const Description = styled.p`
    color: #282c34;
    text-align: center;
    font-weight: bold;

    a {
        text-decoration: none;
        color: #282c34;
    }

    a:visited {
        text-decoration: none;
        color: #282c34;
    }

    a:hover {
        text-decoration: underline;
        font-weight: bold;
    }

    @media (max-width: 700px) {
        max-width: 400px;
    }
`

export const Subscription = styled.p`
    background: #282c34;
    padding: 20px;
    text-align: center;

    a {
        text-decoration: none;
        color: #282c34;
    }

    a:visited {
        text-decoration: none;
        color: #282c34;
    }

    a:hover {
        text-decoration: underline;
        font-weight: bold;
    }

    @media (max-width: 700px) {
        max-width: 400px;
    }
`

export const CarouselContainer = styled.div`
    width: 90vw;
    height: 27vh;
    margin-left: 5vw;
    padding-top: 10px;
    
    @media (max-width: 1024px) {
        width: 100%;
    }

    @media (max-width: 480px) {
        display: none;
    }

    .slick-arrow::before {
        color: #000;
    }
`;

