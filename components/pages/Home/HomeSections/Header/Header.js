import React from 'react';
import {Main, HeaderInfo, Title, More} from './HeaderComponent';
import { Container } from '../../../../UI/UI';
import Link from 'next/link'
import { withTranslation } from '../../../../../i18n'

const Header = (props) => {
    return (
        <Main>
            <Container>
                <HeaderInfo>
                    <Title>
                        {props.t('homeTitle')}
                    </Title>
                    <More><Link href="/about"><a>{props.t('homeBtn')}</a></Link></More>
                </HeaderInfo>
            </Container>
        </Main>
    )
}

export default withTranslation('common')(Header);