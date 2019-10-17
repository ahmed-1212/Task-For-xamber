import React from 'react';
import Header from './HomeSections/Header/Header';
import SectionOne from './HomeSections/SectionOne/SectionOne';
import Hoc from '../../../hoc/Hoc';




const Home = () => {
    return(
        <Hoc>
            <Header  />
            <SectionOne />
        </Hoc>
    )
}

export default Home;