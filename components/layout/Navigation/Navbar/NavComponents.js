import styled from 'styled-components';


export const Nav = styled.nav`
    
        width: 100%;
        height: 80px;
        background-color: #fff;
        .img {
                width: 40%
        } 
        button {
                background: #f34e3a;
                border: none;
                font-size: 16px;
                font-weight: bold;
                cursor: pointer;
                border-radius: 50%;
                color: #fff;
                padding: 13px 12px;
                outline: none
        }
        @media(max-width: 540px) {
            padding: 33px 0 20px
        }
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px
    @media(max-width: 640px) {
        flex-direction: column;
        justify-content: center;
        ul {
            margin: 10px 0;
            padding-left: 0;
            li:first-child{
                padding: 0
            }
        }
        .logo {
            text-align: center
        }
    }
`

export const NavItems = styled.li`
    list-style: none;
    font-size: 13px;
    text-transform: uppercase;
    font-weight: 600;
    padding: 0 20px;
    font-family: sans-serif;
    display: inline-block;
    @media(max-width: 767px) {
        padding: 0 10px
    }
    a{
        color: #444;
        text-decoration: none;
        transition: color .3s ease-out
        &:hover {
            color: #f34e3a
        }
    }
`