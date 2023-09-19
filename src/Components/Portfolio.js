import React, { useState } from 'react';
import AboutMe from './AboutMe';
import Calculator from './Calculator';
// import Contact from './Contact';
import LandingPage from './LandingPage'
import Snek from './Snek';
import { Waypoint } from 'react-waypoint';

// const Pages = [LandingPage, AboutMe, Snek, Calculator, Contact]
const Pages = [LandingPage, AboutMe, Snek, Calculator]

const Portfolio = () => {
    const [activePage, setActivePage] = useState(0) 

    const enterNewSection = i => setActivePage(i)
    return (
        <div className='main-container'>
            {Pages.map((Page, i) => <Waypoint onEnter={()=>enterNewSection(i)} data-section={i}><div className='section'>
                <Page/>
            </div></Waypoint>)}
            <div className='dot-container'>
                {Pages.map((Dot, i) => <div className={`dot ${i === activePage && 'active'}`}/>)}
            </div>
        </div>
    );
};

export default Portfolio;
