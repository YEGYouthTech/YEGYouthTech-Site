import Head from 'next/head';
import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

import Button from '../components/Button';
import EdmontonLayer from '../components/EdmontonLayer';
import Footer from '../components/Footer';
import { HeroTitle } from '../components/HeroTitle';
import Navbar from '../components/Navbar';
import Project from '../components/Project';
import SectionBreak from '../components/SectionBreak';
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
        <title>YEGYouth.Tech - Home</title>
      </Head>

      <Navbar />

      <div className='relative h-screen w-screen overflow-hidden'>
        <StarBG />
        <EdmontonLayer
          image='/images/landing/output2.png'
          parallaxModifier={40}
          animationDelay={0.4}
          brightness={65}
        />
        <EdmontonLayer
          image='/images/landing/output1.png'
          parallaxModifier={20}
          animationDelay={0.2}
          brightness={60}
        />
        <EdmontonLayer
          image='/images/landing/output0.png'
          parallaxModifier={0}
          animationDelay={0}
          brightness={80}
        />
        <HeroTitle />
      </div>

      {/* Create a "Our Mission / Goal" section here */}

      <div
        className='font-workSans mx-auto mt-[4.5rem] max-w-5xl px-4'
        id='projects'
      >
        <div>
          <Fade bottom>
            <h1 className='mb-6 bg-gradient-to-r from-sky-300 to-emerald-300 bg-clip-text text-center font-montserrat text-4xl font-bold text-transparent'>
              Our Projects
            </h1>
          </Fade>
          <div className='flex gap-6'>
            <Project
              name='Course Companion'
              description='A non-district tool to help students compare timetables, filling in the gaps in official programs (SchoolZone).'
              disclaimer='Only available for students of Old Scona Academic.'
              logo='/images/projects/coco/logo.png'
              link='https://coco.yegyouth.tech/'
              // gradientFrom='sky-300'
              // gradientTo='emerald-300'
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

      <SectionBreak />
      <div
        className='font-workSans mx-auto mb-[4.5rem] flex max-w-4xl flex-col items-center justify-center gap-10 px-4 md:flex-row'
        id='join-us'
      >
        <div>
          <img
            src='/images/landing/aboutUs.jpg'
            alt='Edmonton'
            className='h-[20rem] w-[140rem] rounded-xl object-cover md:h-[30rem]'
          />
        </div>
        <div>
          <Fade up>
            <h1 className='mb-6 bg-gradient-to-r from-sky-300 to-emerald-300 bg-clip-text text-left font-montserrat text-4xl font-bold text-transparent'>
              Who We Are
            </h1>
          </Fade>

          <div className='flex flex-col items-start justify-center gap-12 text-left'>
            <Fade up>
              <p className='text-lg text-gray-100/60'>
                We are an organization focused on spreading technological
                awareness to youth in Edmonton. Our mission is to foster an
                appreciation for the ways technology has changed our lives,
                inspiring and empowering the next generation of technologists in
                our community.
              </p>

              <Button link='/about' text='Learn more' />
            </Fade>
          </div>
        </div>
      </div>

      <div
        className='font-workSans mx-auto mb-[4.5rem] flex max-w-4xl flex-col items-center justify-center gap-10 px-4 md:flex-row-reverse'
        id='join-us'
      >
        <div>
          <img
            src='/images/landing/COT.jpg'
            alt='Edmonton'
            className='h-[20rem] w-[140rem] rounded-xl object-cover md:h-[30rem]'
          />
        </div>
        <div>
          <Fade up>
            <h1 className='mb-6 bg-gradient-to-r from-sky-300 to-emerald-300 bg-clip-text text-left font-montserrat text-4xl font-bold text-transparent'>
              Components of Technology
            </h1>
          </Fade>

          <div className='flex flex-col items-start justify-center gap-12 text-left'>
            <Fade up>
              <p className='text-lg text-gray-100/60'>
                Technology isn't a monolithic industry. Rather, its components
                are diverse and complex. We believe that that the bits and
                pieces behind the pieces of technology we use everyday inspire
                developers all around the world to be able to create incredible
                things.
              </p>

              <Button link='/cot' text='Learn more' />
            </Fade>
          </div>
        </div>
      </div>
      <SectionBreak />

      <div
        className='font-workSans mx-auto mb-[4.5rem] max-w-4xl px-4'
        id='join-us'
      >
        <div>
          <Fade up>
            <h1 className='mb-6 bg-gradient-to-r from-sky-300 to-emerald-300 bg-clip-text text-center font-montserrat text-4xl font-bold text-transparent'>
              Join Us!
            </h1>
          </Fade>

          <div className='flex flex-col items-center justify-center gap-12 text-center'>
            <Zoom>
              <div className='flex w-full flex-col md:w-3/4'>
                <div className='grow-1 flex flex-col gap-4'>
                  <h1 className='font-montserrat text-3xl text-gray-100'>
                    Apply To Be A Team Member
                  </h1>
                  <p className='m-auto text-lg text-gray-100/60 md:w-3/4'>
                    We are always looking for new team members.
                    <br />
                    If you are interested in joining our team,
                    <br />
                    please fill out this form.
                  </p>
                </div>
                <div className='mt-6'>
                  <Button
                    link='https://forms.gle/VEZaiWd1qpXvsRWt6'
                    target='_blank'
                    text='Apply'
                  />
                </div>
              </div>
            </Zoom>

            <Zoom>
              <div className='flex w-full flex-col md:w-3/4'>
                <div className='grow-1 flex flex-col gap-4'>
                  <h1 className='font-montserrat text-3xl text-gray-100'>
                    Subscribe To Our Newsletter
                  </h1>
                  <p className='m-auto text-lg text-gray-100/60 md:w-3/4'>
                    We send out emails about our
                    <br />
                    events, workshops, and opportunities.
                  </p>
                </div>
                <div className='mt-6'>
                  <Button
                    link='https://forms.gle/zwErYCuSkw2PFQTXA'
                    target='_blank'
                    text='Subscribe'
                  />
                </div>
              </div>
            </Zoom>

            <Zoom>
              <div className='flex w-full flex-col md:w-3/4'>
                <div className='grow-1 flex flex-col gap-4'>
                  <h1 className='font-montserrat text-3xl text-gray-100'>
                    Join Our Discord
                  </h1>
                  <p className='m-auto text-lg text-gray-100/60 md:w-3/4'>
                    We have a Discord server where we discuss tech, share
                    resources, and collaborate on projects.
                  </p>
                </div>
                <div className='mt-6'>
                  <Button
                    link='https://discord.gg/szjzhYkT9e'
                    target='_blank'
                    text='Join'
                  />
                </div>
              </div>
            </Zoom>
          </div>
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
