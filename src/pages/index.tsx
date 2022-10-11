import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

import ComponentOfTechnology from '../components/ComponentOfTechnology';
import EdmontonLayer from '../components/EdmontonLayer';
import { HeroTitle } from '../components/HeroTitle';
import Navbar from '../components/Navbar';
import Project from '../components/Project';
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

      <div className='mx-auto max-w-5xl px-4 font-montserrat'>
        <div className='overflow-hidden'>
          <Fade bottom>
            <h1 className='mt-12 text-center text-4xl font-bold text-purple-200/[.87]'>
              Components of Technology
            </h1>
          </Fade>
          <Fade bottom>
            <p className='mt-4 mb-16 text-center text-lg text-gray-200/60'>
              Technology isn't a monolithic industry. Rather, its components are
              diverse and complex.
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
              Our mission is to foster an appreciation for the ways technology
              has changed our lives, inspiring and empowering the next
              generation of technologists in our community.
            </p>
          </Fade>
          <Zoom>
            <div className='mx-auto mt-8 max-w-lg rounded-[55px] bg-gradient-to-r from-purple-800/20 to-purple-900/20 p-12 backdrop-blur'>
              <h1 className='mb-4 bg-gradient-to-r from-[#bd039f] to-[#9460e4] bg-clip-text text-center font-montserrat font-montserrat text-2xl font-bold text-transparent'>
                Did you know?
              </h1>
              <p className='leading-7 text-white/[.89]'>
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
          </Zoom>
        </div>
      </div>
      <div className='font-workSans mx-auto max-w-5xl px-4'>
        <div>
          <Fade bottom>
            <h1 className='mt-20 mb-6 text-center font-montserrat text-4xl font-bold text-purple-200/[.87]'>
              Our Projects
            </h1>
          </Fade>
          <div className='flex gap-6'>
            <Project
              name='Course Companion'
              description='A non-district tool to help students compare their timetables, filling in the gaps in official programs (SchoolZone).'
              disclaimer='Only available for students of Old Scona Academic.'
              logo='/images/projects/coco/logo.png'
              link='https://coco.yegyouth.tech/'
              gradientFrom='#1a857c'
              gradientTo='#8fe7b1'
              image='/images/projects/coco/coco_desktop.png'
              imageSmall='/images/projects/coco/coco_mobile.png'
              github='https://github.com/YEGYouthTech/CourseCompanion'
              contributors={[
                {
                  name: 'Oliver Chen',
                  link: 'https://github.com/ochen1/',
                  avatar:
                    'https://coco.yegyouth.tech/assets/images/team/Oliver_Chen.jpg',
                },
                {
                  name: 'Evan Yin',
                  avatar:
                    'https://coco.yegyouth.tech/assets/images/team/Evan_Yin.jpg',
                },
                {
                  name: 'Justin Qian',
                  avatar:
                    'https://coco.yegyouth.tech/assets/images/team/Justin_Qian.jpg',
                },
                {
                  name: 'Elina Ajamian',
                  avatar:
                    'https://coco.yegyouth.tech/assets/images/team/Elina_Ajamian.jpg',
                },
                {
                  name: 'Heril Saha',
                  link: 'https://github.com/HerilS',
                  avatar:
                    'https://coco.yegyouth.tech/assets/images/team/Heril_Saha.jpg',
                },
                {
                  name: 'Hao Cheng',
                  link: 'https://github.com/pepeworm',
                  avatar:
                    'https://coco.yegyouth.tech/assets/images/team/Hao_Cheng.jpg',
                },
                {
                  name: 'Jason Li',
                  avatar:
                    'https://coco.yegyouth.tech/assets/images/team/Jason_Li.jpg',
                },
                {
                  name: 'William Ma',
                  avatar:
                    'https://coco.yegyouth.tech/assets/images/team/William_Ma.png',
                },
                {
                  name: 'and 4 more',
                  link: 'https://coco.yegyouth.tech/about/',
                  more: 4,
                },
              ]}
            />
          </div>
        </div>
      </div>
      <div className='font-workSans mx-auto max-w-5xl px-4'>
        <div>
          <Fade bottom>
            <h1 className='mt-20 mb-6 text-center font-montserrat text-4xl font-bold text-purple-200/[.87]'>
              Join us!
            </h1>
          </Fade>
          <div className='flex gap-6 text-center'>
            <Zoom>
              <div className='flex flex-col'>
                <div className='grow-1 flex flex-col gap-4'>
                  <h1 className='text-3xl font-bold text-purple-200/[.87]'>
                    Join our Discord
                  </h1>
                  <p className='text-lg text-gray-200/60'>
                    We have a Discord server where we discuss tech, share
                    resources, and collaborate on projects.
                  </p>
                </div>
                <div className='mt-8'>
                  <a
                    href='https://discord.gg/szjzhYkT9e'
                    className='rounded-[55px] bg-gradient-to-r from-purple-800/20 to-purple-900/20 px-8 py-3 font-bold text-purple-200/[.87]'
                  >
                    Join
                  </a>
                </div>
              </div>
            </Zoom>
            <Zoom>
              <div className='flex flex-col'>
                <div className='grow-1 flex flex-col gap-4'>
                  <h1 className='text-3xl font-bold text-purple-200/[.87]'>
                    Join our mailing list
                  </h1>
                  <p className='text-lg text-gray-200/60'>
                    We send out emails about our events, workshops, and
                    opportunities.
                  </p>
                </div>
                <div className='mt-8'>
                  <a
                    href=''
                    className='rounded-[55px] bg-gradient-to-r from-purple-800/20 to-purple-900/20 px-8 py-3 font-bold text-purple-200/[.87]'
                  >
                    Join
                  </a>
                </div>
              </div>
            </Zoom>
          </div>
        </div>
      </div>
      <div className='font-workSans mx-auto max-w-5xl px-4'>
        <div>
          <Fade bottom>
            <h1 className='mt-20 mb-6 text-center font-montserrat text-4xl font-bold text-purple-200/[.87]'>
              Our Team
            </h1>
          </Fade>
          <div className='flex flex-wrap gap-6'></div>
        </div>
      </div>
      <div className='mx-auto mt-24 max-w-6xl'>
        <p className='text-center text-lg text-white/[.87]'>
          Thank you to our sponsors for supporting our mission!
        </p>
        <div className='mt-6 flex items-center justify-center gap-4 opacity-[.87]'>
          <a href='https://www.cybera.ca/'>
            <img
              className='w-32'
              src='https://i0.wp.com/www.cybera.ca/wp-content/uploads/2020/03/cybera_logo_2.png'
              alt='Cybera'
            />
          </a>
          <a href='https://mlh.io/'>
            <img
              className='w-32'
              src='https://static.mlh.io/brand-assets/logo/official/mlh-logo-white.png'
              alt='MLH'
            />
          </a>
        </div>
        <div className='mt-6 flex items-center justify-center gap-4 opacity-[.87]'></div>
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
