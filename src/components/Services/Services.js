import React from 'react'
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';
import {
    ServicesContainer,
    ServicesCard,
    ServicesH1,
    ServicesH2,
    ServicesWrapper,
    ServicesIcon,
    ServicesP
} from './ServicesElements'

const Services = ({ services }) => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Expensions</ServicesH2>
                    <ServicesP>
                        Help for repair of Your Car
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Services</ServicesH2>
                    <ServicesP>
                        Finding the best proposals
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Community</ServicesH2>
                    <ServicesP>
                        Find nice people who are passionate about cars
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
