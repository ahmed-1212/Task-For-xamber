import React from 'react';
import { NavItems, Nav, Wrapper } from './NavComponents';
import {Link} from '../../../../i18n'
import { Container } from '../../../UI/UI';
import {  withTranslation } from '../../../../i18n'

const Navbar = (props) => {

    

    return (
        
        <Nav>
            <Container>
                <Wrapper>
                    <Link href="/"><a className="logo"><img className="img"  src="https://prowess.select-themes.com/wp-content/uploads/2018/03/logo-dark-heder.png" /></a></Link>
                    <ul>
                        <NavItems ><Link href="/" ><a >{props.t('linkOne')}</a></Link></NavItems>
                        <NavItems><Link href="/about"><a>{props.t('linkTow')}</a></Link></NavItems>
                        <NavItems><Link href="/contact"><a>{props.t('linkThree')}</a></Link></NavItems>
                        <NavItems><button onClick={props.changeLang}>{props.t('lang')}</button></NavItems>
                    </ul>
                </Wrapper>
            </Container>
        </Nav>
    )
}



export default withTranslation('navbar')(Navbar);