import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(#61dafbaa, #333333ee);
    background-color: #61dafb;
    display: flex;
    flex-wrap: wrap;
`
export const ImageContainer = styled.div`
    width: 43vw;
    height: 70vh;

    @media (max-width: 1024px) {
        height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        z-index: 2;
    }
`

export const Image = styled.img`
    width: 40vw;
    height: 70vh;
    position: absolute;
    margin-left: -30px;
    filter: grayscale(1);
    opacity: 0.8;
    animation: myphoto 5s linear;

    @keyframes myphoto {
        from {opacity: 0.0;}
        to {opacity: 0.8;}
    }

    @media (max-width: 1024px) {
        width: 100vw;
        height: 100vh;
        opacity: 0.2;
        position: absolute;
        z-index: 2;
        animation: myphototb 5s linear;

        @keyframes myphototb {
        from {opacity: 0.0;}
        to {opacity: 0.2;}
    }
    }
`

export const Info = styled.div`
    width: 55vw;
    height: 70vh;
    animation: infoShow 2s linear;
    overflow: hidden;

    @keyframes infoShow {
        from {
            opacity: 0;
            height: 0;
        }
        to {
            opacity: 1;
        }
    }

    h1 {
        padding: 30px 20px 0px 10px;
        text-shadow: 0 0 3px #fff, 0 0 15px #61dafb;
        font-size: 3em;
    }

    p {
        padding: 0px 40px 0px 30px;
        text-align: justify;

        a, a:visited {
            text-decoration: none;
            color: white;
        }

        a:hover {
            text-decoration: underline;
            cursor: pointer;
        }
    }

    @media (max-width: 1024px) {
        height: 60vh;
        width: 90vw;
        margin-left: 5vw;
        padding: 0 auto;

        h1 {
            font-size: 2em;
            margin: 0 5vw;
            border-bottom: 1px solid #61dafb;
        }

        p {
            font-size: 1em;
        }
    }

    @media (max-width: 520px) {
        height: 60vh;
        width: 90vw;
        margin-left: 5vw;
        border: 1px solid red;

        h1 {
            font-size: 1em;
            margin: 0 5vw;
            border-bottom: 1px solid #61dafb;
        }

        p {
            font-size: 0.8em;
        }
    }
`

export const BaseBoard = styled.div`
    width: 100vw;
    height: 30vh;
    display: flex;
    flex-wrap: wrap;
    padding-top: 5vh;

    p {
        font-weight: bold;
        text-align: right;
        width: 10vw;
        height: 10vh;
        writing-mode: vertical-rl;
        animation: show 2s normal;
        white-space: nowrap;
        overflow: hidden;

        @keyframes show {
            from {
                height: 0;
            }
            to {
                height: 10vh;
            }
        }
    }
    
    h1 {
        margin-top: 0px;
        text-shadow: 0 0 3px #fff, 0 0 15px #61dafb;
        width: 80vw;
        font-size: 4em;
        animation: appear 6s linear;
        white-space: nowrap;
        overflow: hidden;

        @keyframes appear {
            from {
                width: 0;
            }
            to {
                width: 80vw;
            }
        }
    }

    h3 {
        margin-top: -70px;
        text-align: center;
        width: 100vw;
        animation: typing 10s normal;

        @keyframes typing {
            from {color: transparent;}
            to {color: white;}
        }
    }

    @media (max-width: 1024px) {
        height: 40vh;
        width: 100vw;
        padding: 0;

        p {
            font-size: 1em;
            text-align: left;
            height: 10vh;

            @keyframes show {
                from {
                    height: 0;
                }
                to {
                    height: 10vh;
                }
            }
        }

        h1 {
            height: 10vh;
            font-size: 3.5em;
        }

        h3 {
            width: 80vw;
            margin-left: 10vw;
            font-size: 1em;
        }
    }

    @media (max-width: 550px) {
        p {
            font-size: 0.7em;
        }

        h1 {
            font-size: 2.5em;
        }

        h3 {
            font-size: 0.8em;
        }
    }
`