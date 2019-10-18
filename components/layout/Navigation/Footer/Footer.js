import React from 'react';
import {Main, Wrapper, QuickNav, Title, ColumnOne, ColumnTow, Par } from './FooterComponents';
import { Container } from '../../../UI/UI';
import {Link} from '../../../../i18n';
import { withTranslation } from '../../../../i18n'

const Footer = (props) => {
    return (
        <Main>
            <Container>
                <Wrapper>
                    <ColumnOne>
                        <img src="https://prowess.select-themes.com/wp-content/uploads/2018/03/logo-light.png" alt="logo" />
                        <Par>{props.t('par')}</Par>
                    </ColumnOne>
                    <ColumnTow>
                        <Title>{props.t('title')}</Title>
                        <QuickNav ><Link href="/" ><a >{props.t('linkOne')}</a></Link></QuickNav>
                        <QuickNav><Link href="/about"><a>{props.t('linkTow')}</a></Link></QuickNav>
                        <QuickNav><Link href="/contact"><a>{props.t('linkThree')}</a></Link></QuickNav>
                    </ColumnTow>
                </Wrapper>
            </Container>
        </Main>
    )
}

export default withTranslation('footer')(Footer);