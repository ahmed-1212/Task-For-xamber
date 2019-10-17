import styled from 'styled-components';

export const SectionBack = styled.div`
    background: url('https://prowess.select-themes.com/wp-content/uploads/2018/02/h1-parallax-img-1.jpg') fixed no-repeat center center;
    background-size: cover;
    height: 500px;
    position: relative;
    margin: 80px 0;
    @media(max-width: 520px) {
        height: 300px
    }
`

export const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .1);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`



export const Par = styled.h3`
    color: #fff;
    font-family: sans-serif;
    font-size: 32px;
    text-align: center;
    width: 60%;
    line-height: 1.7;
    @media(max-width: 520px) {
        width: 80%;
        font-size: 23px;
    }
`