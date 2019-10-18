import styled from 'styled-components';

export const SectionBack = styled.div`
    margin: 80px 0;
    input {
        width: 100%;
        display: block;
        margin: 10px 0;
        padding: ${props => props.lang === 'ltr' ? '10px 0 10px 10px' : '10px 10px 10px 0px'}
    }
    textarea {
        width: 100%;
        display: block;
        margin: 10px 0;
        height: 100px;
        padding: ${props => props.lang === 'ltr' ? '10px 0 10px 10px' : '10px 10px 10px 0px'}
    }
`


export const Title = styled.h3`
    color: #444;
    font-family: sans-serif;
    font-size: 32px;
    line-height: 1.7;
`

export const Send = styled.button`
    color: #fff;
    background-color: #493836;
    border: 1px solid #493836;
    padding: 10px 30px;
    font-size: 16px;
    transition: color .3s ease-out;
    cursor: pointer;
    &:hover{
        background-color: #444
    }
`

export const Overlay = styled.div`
    position: fixed;
    top: ${props => props.send ? '0' : '-100%'};
    left: 0;
    width: 100%;
    height: 100%;
    transition: all .3s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const InnerLay = styled.div`
    padding: 15px;
    background-color: #f9f9f9;
    width: 500px;
    height: 150px;
    text-align: center;
    @media(max-width: 550px) {
        width: 350px
    }
`

export const Message = styled.p`
    font-size: 25px;
    color: #444;

`



