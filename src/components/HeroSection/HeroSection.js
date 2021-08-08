import React from 'react'
import Video from '../../video/getMeCrazy.mp4'
import { HeroSectionContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP } from './HeroSectionElements'

 const HeroSection = () => {

    return (
        <HeroSectionContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='getMeCrazy/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Clear Drive Can Be Real</HeroH1>
                <HeroP>
                    Sign Up for get more information about road safety and driving technic.
                </HeroP>
            </HeroContent>
        </HeroSectionContainer>
    )
}

export default HeroSection;