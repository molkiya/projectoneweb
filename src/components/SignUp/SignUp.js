import React from 'react'
import { 
    Container, 
    Form, 
    FormButton, 
    FormContent, 
    FormH1, 
    FormInput, 
    FormLabel, 
    FormWrap, 
    Icon,
} from './SignUpElements'
import ParallaxMousemove from 'react-parallax-mousemove'
import Img1 from './imgs/carsIsometric.png'


const SignUp = () => {

    const style = {
        outter: {
          background: 'linear-gradient(90deg, rgba(148,149,151,1) 0%, rgba(245,223,77,1) 100%)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          width: '100%',
          height: '100%',
          position: 'relative',
          overflow: 'hidden'
        },

        inner: {
          width: '1000px',
          height: '100%',
          position: 'center',
          margin: 'auto',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          textAlign: 'center',
        },

        infoLayerStyle: {
          position: 'relative',
          marginTop: '200px',
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        },
      }

    return (
        <>
        <ParallaxMousemove containerStyle={style.outter} fullHeight={true}>
          <div style={style.inner}>
            <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                xFactor: 0.2,
                yFactor: 0,
                springSettings: {
                  stiffness: 50,
                  damping: 30
                }
              }}>
              <img src={Img1} alt="Parallax Layer"></img>
            </ParallaxMousemove.Layer>
            <Container>
                <FormWrap>
                        <Icon to='/'>JUSTICE</Icon>
                        <FormContent >
                            <Form action='#'>
                                <FormH1>Create a new account</FormH1>
                                <FormLabel htmlFor='for'>Your E-mail</FormLabel>
                                <FormInput type='email' />
                                <FormLabel htmlFor='for'>Your Password</FormLabel>
                                <FormInput type='password' />
                                <FormLabel htmlFor='for'>Repeat the Your Password</FormLabel>
                                <FormInput type='password'/>
                                <FormButton type='submit'>Continue</FormButton>
                            </Form>
                        </FormContent>
                    </FormWrap>
            </Container> 
          </div>
        </ParallaxMousemove>
        </>
    )
}


export default SignUp
