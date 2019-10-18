import React, { Component } from 'react';
import Navbar from './Navigation/Navbar/Navbar'
import Footer from './Navigation/Footer/Footer';
import {  i18n, withTranslation  } from '../../i18n';
import { GlobalStyle } from '../UI/UI'

class Layout extends Component {
    
    render() {
        return (
            <div>
                <GlobalStyle lang={this.props.t('en')}/>
                <Navbar changeLang={() => i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en')} />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}





export default withTranslation('common')(Layout);