import styled from 'styled-components';


export const Main = styled.footer`
    background-color: #252525;
    padding: 50px 0 10px;
    
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    @media(max-width: 576px) {
        flex-direction: column;
    }
`

export const ColumnOne = styled.div`
    img {
        max-width: 100%;
    }
`

export const ColumnTow = styled.div`
    
`


export const Title = styled.h2`
    color: #fff;
    font-size: 20px;
    margin-bottom: 20px;
    margin-top: 0;
`

export const Par = styled.h3`
    color: #9c9c9c;
    font-size: 13px;
    width: 60%;

`

export const QuickNav = styled.li`
    list-style: none;
    text-transform: uppercase;
    color: #fff;
    padding: 20px 0;
    font-size: 12px;
    font-weight: 600;
    a{
        color: #fff;
        text-decoration: none;
        transition: color .3s ease-out;
        &:hover {
            color: #f34e3a
        }
    }

`

