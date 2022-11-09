import Head from 'next/head';
import React from 'react';
import Fade from 'react-reveal/Fade';

import ComponentOfTechnology from '../components/ComponentOfTechnology';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { StarBG } from '../components/StarBG';
import { AnimationStateContext } from '../context/AnimationStateContext';

export default function App() {
  const [animationState, setAnimationState] = React.useState(false);

  React.useEffect(() => {
    import('smoothscroll-for-websites').then((imp) => {
      const SmoothScroll = imp.default;
      SmoothScroll({
        // Scrolling Core
        animationTime: 1000, // [ms]
        stepSize: 100, // [px]

        // Acceleration
        accelerationDelta: 20, // 50
        accelerationMax: 2, // 3

        // Keyboard Settings
        keyboardSupport: true, // option
        arrowScroll: 200, // [px]

        // Pulse (less tweakable)
        // ratio of "tail" to "acceleration"
        pulseAlgorithm: true,
        pulseScale: 4,
        pulseNormalize: 1,

        // Other
        touchpadSupport: true, // ignore touchpad by default
        fixedBackground: true,
        excluded: '',
      });
    });
    return;
  });

  React.useEffect(() => {
    setTimeout(() => {
      setAnimationState(true);
    }, 1000);
  });

  return (
    <AnimationStateContext.Provider
      value={{ animationState, setAnimationState }}
    >
      <Head>
        <title>YEGYouth.Tech - Components of Technology</title>
      </Head>

      <Navbar />

      <StarBG />

      <div className='mx-auto max-w-5xl px-4' id='cot'>
        <div className='overflow-hidden'>
          <Fade delay={100} bottom>
            <h1 className='mt-[4.5rem] bg-gradient-to-r from-sky-300 to-emerald-300 bg-clip-text text-center font-montserrat text-4xl font-bold text-transparent'>
              Components of Technology
            </h1>
          </Fade>
          <Fade delay={300} bottom>
            <p className='mt-6 mb-10 text-center text-lg text-gray-100'>
              Technology isn't a monolithic industry.
              <br />
              Rather, its components are diverse and complex.
            </p>
          </Fade>
          <ComponentOfTechnology
            name='Cybersecurity'
            direction='right'
            gradientFrom='#05cafe'
            gradientTo='#2f32cf'
            customMargin='mt-0'
          ></ComponentOfTechnology>
          <ComponentOfTechnology
            name='Game Dev'
            direction='left'
            gradientFrom='#f50d5b'
            gradientTo='#e400ff'
          ></ComponentOfTechnology>
          <ComponentOfTechnology
            name='Networking'
            direction='right'
            gradientFrom='#FF512F'
            gradientTo='#DD2476'
          ></ComponentOfTechnology>
          <ComponentOfTechnology
            name='Web & App Dev'
            direction='left'
            gradientFrom='#ee0979'
            gradientTo='#ff6a00'
          ></ComponentOfTechnology>
          <ComponentOfTechnology
            name='Algorithms'
            direction='right'
            gradientFrom='#e4f12e'
            gradientTo='#56db63'
          ></ComponentOfTechnology>
          <ComponentOfTechnology
            name='Machine Learning'
            direction='left'
            gradientFrom='#e5e7eb99'
            gradientTo='#555'
            customMargin='mb-0'
          ></ComponentOfTechnology>
        </div>
      </div>

      <Footer
        message='Thank you to our sponsors for supporting our mission!'
        imgData={[
          {
            link: 'https://www.cybera.ca/',
            altText: 'Cybera',
            src: 'https://i0.wp.com/www.cybera.ca/wp-content/uploads/2020/03/cybera_logo_2.png',
          },
          {
            link: 'https://mlh.io/',
            altText: 'MLH',
            src: 'https://static.mlh.io/brand-assets/logo/official/mlh-logo-white.png',
          },
        ]}
      />
    </AnimationStateContext.Provider>
  );
}
