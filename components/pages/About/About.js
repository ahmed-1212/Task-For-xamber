import React from 'react';
import Header from './AboutSections/Header/Header';
import SectionOne from './AboutSections/SectionOne/SectionOne'
import Hoc from '../../../hoc/Hoc';




const About = () => {
    return(
        <Hoc>
            <Header  />
            <SectionOne />
        </Hoc>
    )
}

export default About;