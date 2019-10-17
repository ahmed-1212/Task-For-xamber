import React from 'react';
import Header from './ContactSections/Header/Header';
import Hoc from '../../../hoc/Hoc';
import SectionOne from './ContactSections/SectionOne/SectionOne'




const Contact = () => {
    return(
        <Hoc>
            <Header  />
            <SectionOne />
        </Hoc>
    )
}

export default Contact;