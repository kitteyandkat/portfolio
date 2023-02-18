import React, { useState } from 'react';
import AboutMe from './AboutMe';
import Calculator from './Calculator';
import Contact from './Contact';
import LandingPage from './LandingPage'
import Snek from './Snek';
import { Waypoint } from 'react-waypoint';

const Pages = [LandingPage, AboutMe, Snek, Calculator, Contact]

const Portfolio = () => {
    const [activePage, setActivePage] = useState(0) 

    const enterNewSection = i => setActivePage(i)
    return (
        <div className='main-container'>
            {/* <div className='section'>
                <h1>Snek</h1>
            </div>
            <div className='section'>
            <h1>Calculator</h1>
            </div>
            <div className='section'>
            <h1>About Me</h1>
            </div>
            <div className='section'>
            <h1>Contact</h1>
            </div> */}
            {Pages.map((Page, i) => <Waypoint onEnter={()=>enterNewSection(i)} data-section={i}><div className='section'>
                <Page/>
            </div></Waypoint>)}
            <div className='dot-container'>
                {Pages.map((Dot, i) => <div className={`dot ${i === activePage && 'active'}`}/>)}
            </div>
        </div>
        // <FullPage>
        //     <FullPageSections>
        //         <FullPageSection style={{height: '100vh'}}>
        //             <h1>About Me</h1>
        //         </FullPageSection>
        //         <FullPageSection style={{height: '100vh'}}>
        //             <h1>Calculator Project</h1>
        //         </FullPageSection>
        //         <FullPageSection style={{height: '100vh'}}>
        //             <h1>Game Project</h1>
        //         </FullPageSection>
        //     </FullPageSections>
        // </FullPage>
    );
};

export default Portfolio;
