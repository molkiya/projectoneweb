import React, { useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Navbar from '../components/Navbar/Navbar'
import HeroSection from '../components/HeroSection/HeroSection'
import InfoSection from '../components/InfoSection/Info'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data'
import ImgAuto1 from '../images/svg-1.svg'
import ImgAuto2 from '../images/svg-2.svg'
import ImgAuto3 from '../images/svg-3.svg'
import Services from '../components/Services/Services'
import Footer from '../components/Footer/Footer'

const Home = () => {
    
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} img={ImgAuto1}/>
            <InfoSection {...homeObjTwo} img={ImgAuto2}/>
            <InfoSection {...homeObjThree} img={ImgAuto3}/>
            <Services id={Services}/>
            <Footer />
        </>
    )
}

export default Home
