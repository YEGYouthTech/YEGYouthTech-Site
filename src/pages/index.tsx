import React from 'react';
import Fade from 'react-reveal/Fade';

import ComponentOfTechnology from '../components/ComponentOfTechnology';
import EdmontonLayer from '../components/EdmontonLayer';
import { HeroTitle } from '../components/HeroTitle';
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
      <Navbar />

      <div className='relative h-screen w-screen overflow-hidden'>
        <StarBG />
        <EdmontonLayer
          // image="https://media.discordapp.net/attachments/746177266471534695/1011395732823089214/output2.png"
          // image='https://i.imgur.com/NE6Sqs2.png'
          image='/images/landing/output2.png'
          parallaxModifier={40}
          animationDelay={0.4}
          brightness={70}
        />
        <EdmontonLayer
          // image="https://media.discordapp.net/attachments/746177266471534695/1011395732424634439/output1.png"
          // image='https://i.imgur.com/NiNYv7m.png'
          image='/images/landing/output1.png'
          parallaxModifier={20}
          animationDelay={0.2}
          brightness={60}
        />
        <EdmontonLayer
          // image="https://media.discordapp.net/attachments/746177266471534695/1011395732017791007/output0.png"
          // image='https://i.imgur.com/cxTWGEZ.png'
          image='/images/landing/output0.png'
          parallaxModifier={0}
          animationDelay={0}
          brightness={80}
        />
        <HeroTitle />
      </div>

      <div className='mx-auto max-w-sm'></div>

      <br />
      <br />
      <br />

      <div className='mx-auto max-w-5xl px-4'>
        <div className='overflow-hidden'>
          <Fade bottom>
            <h1 className='mt-12 text-center text-4xl font-bold text-purple-200/[.87]'>
              Components of Technology
            </h1>
          </Fade>
          <Fade bottom>
            <p className='mt-4 mb-16 text-center text-lg text-gray-200/60'>
              When we say technology, we refer to these components that make up
              the tech that we all use and love.
            </p>
          </Fade>
          <ComponentOfTechnology
            name='Cybersecurity'
            direction='right'
            gradientFrom='#05cafe'
            gradientTo='#2f32cf'
          ></ComponentOfTechnology>
          <ComponentOfTechnology
            name='Game Dev'
            direction='left'
            gradientFrom='#e400ff'
            gradientTo='#f50d5b'
          ></ComponentOfTechnology>
          <ComponentOfTechnology
            name='Networking'
            direction='right'
            gradientFrom='#FF512F'
            gradientTo='#DD2476'
          ></ComponentOfTechnology>
          <ComponentOfTechnology
            name='Web / App Dev'
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
            gradientFrom='#555'
            gradientTo='#555'
          ></ComponentOfTechnology>
          <Fade bottom>
            <p className='my-4 text-center text-lg text-gray-200/60'>
              And more!
            </p>
          </Fade>
          <Fade bottom>
            <p className='my-4 text-center text-lg text-gray-200/60'>
              Our mission is to inspire and empower the next generation of
              technologists in our community.
            </p>
          </Fade>
          <div className='mx-auto mt-8 max-w-lg rounded-[55px] bg-gradient-to-r from-purple-800/20 to-purple-900/20 p-12 backdrop-blur'>
            <h1 className='mb-4 bg-gradient-to-r from-[#bd039f] to-[#9460e4] bg-clip-text text-center font-montserrat text-2xl font-bold text-transparent'>
              Did you know?
            </h1>
            <p className='font-montserrat leading-6 text-white/[.89]'>
              According to{' '}
              <a
                href='https://www.bls.gov/ooh/computer-and-information-technology/information-security-analysts.htm'
                className='text-purple-400/[.87] underline'
              >
                the U.S. BLS
              </a>
              , jobs for information security analysts will grow by 35% from
              2021 to 2031. This rate is 7 times faster than the average
              employment growth rate of all occupations nationwide.
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </AnimationStateContext.Provider>
  );
}
