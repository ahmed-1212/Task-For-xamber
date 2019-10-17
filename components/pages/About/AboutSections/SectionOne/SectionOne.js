import React from 'react';
import {SectionMain, Wrapper, ColumnOne, ColumnTow} from './SectionComponents';
import { Container } from '../../../../UI/UI'
import { withTranslation } from '../../../../../i18n'

const SectionOne = (props) => {
    return (
        <SectionMain>
            <Container>
                <Wrapper>
                    <ColumnOne>
                        <img src="https://prowess.select-themes.com/wp-content/uploads/2018/02/info-box-img-3.jpg" alt="me" />
                    </ColumnOne>
                    <ColumnTow lang={props.t('en')}>
                        <h3>{props.t('aboutHeader')}</h3>
                        <p>{props.t('aboutSectionPar')}</p>
                    </ColumnTow>
                </Wrapper>
            </Container>
        </SectionMain>
    )
}

export default withTranslation('common')(SectionOne);