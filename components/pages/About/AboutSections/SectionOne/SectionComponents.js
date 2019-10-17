import styled from 'styled-components';

export const SectionMain = styled.div`
    margin: 80px 0
`
export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    @media(max-width: 768px) {
        flex-direction: column
    }

`

export const ColumnOne = styled.div`
    img {
        max-width: 100%;
    }
`

export const ColumnTow = styled.div`
    width: 46%;
    margin-left: ${props => props.lang === 'ltr' ? '45px' : null};
    margin-right: ${props => props.lang === 'rtl' ? '45px' : null};
    h3 {
        font-size: 30px;
        color: #444;
        margin-top: 0
    }
    p {
        color: #9c9c9c;
        font-size: 16px;
        line-height: 1.7
    }

    @media(max-width: 768px) {
        width: 100%;
        margin: 30px 0 0 0
    }
`

