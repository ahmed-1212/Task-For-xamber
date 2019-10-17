import styled from 'styled-components';



export const Main = styled.header`
    height: 100vh;
    background: url('https://prowess.select-themes.com/wp-content/uploads/2018/02/h1-slider1-img-1.png') center center no-repeat;
    background-size: cover;

`

export const HeaderInfo = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center
`

export const Title = styled.h1`
    font-weight: bold;
    color: #444;
    font-size: 66px;
    margin-top: 4rem;
    font-family: sans-serif;
    width: 45%;
    @media(max-width: 680px) {
        width: 70%
    }

    @media(max-width: 420px) {
        width: 80%;
        font-size: 43px;
    }
    
`

export const More = styled.button`
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    background-color: #493836;
    padding: 18px 32px;
    border: 1px solid #493836;
    font-family: sans-serif;
    width: 25%;
    transition: color .3s ease-out;
    cursor: pointer
    &:hover{
        background-color: #444
    }
    a{
        color: #fff;
        text-decoration: none
    }

    @media(max-width: 680px) {
        width: 40%
    }
`