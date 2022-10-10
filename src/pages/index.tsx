import React from 'react';

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
