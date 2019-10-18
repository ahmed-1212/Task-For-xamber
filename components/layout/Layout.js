import React, { Component } from 'react';
import Navbar from './Navigation/Navbar/Navbar'
import Footer from './Navigation/Footer/Footer';
import {  i18n, withTranslation  } from '../../i18n';
import { GlobalStyle } from '../UI/UI'
import Store from '../../store/public'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


const store = createStore(Store, applyMiddleware(thunk));


class Layout extends Component {
    
    render() {
        return (
            <Provider store={store}>
                <GlobalStyle lang={this.props.t('en')}/>
                <Navbar changeLang={() => i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en')} />
                {this.props.children}
                <Footer />
            </Provider>
        )
    }
}





export default withTranslation('common')(Layout);