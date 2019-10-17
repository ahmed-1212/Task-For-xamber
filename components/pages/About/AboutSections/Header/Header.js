import React from 'react';
import {Main, Title} from './HeaderComponent';
import { withTranslation } from '../../../../../i18n'

const Header = props => {
    return (
        <Main>
            <Title >
            {props.t('aboutHeader')}
            </Title>
        </Main>
    )
}



export default withTranslation('common')(Header);