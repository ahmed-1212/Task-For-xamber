import React from 'react';
import {SectionBack, Overlay, Par} from './SectionComponents';
import { withTranslation } from '../../../../../i18n'
const SectionOne = (props) => {

    
  
    return (
        <SectionBack>
            <Overlay>
                <Par>{props.t('homeSection')}</Par>
            </Overlay>
        </SectionBack>
    )
}

export default withTranslation('common')(SectionOne);