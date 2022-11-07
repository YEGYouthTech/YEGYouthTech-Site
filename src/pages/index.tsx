import Head from 'next/head';
import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

import Button from '../components/Button';
import ComponentOfTechnology from '../components/ComponentOfTechnology';
import EdmontonLayer from '../components/EdmontonLayer';
import ExecMember from '../components/ExecMember';
import Footer from '../components/Footer';
import { HeroTitle } from '../components/HeroTitle';
import InfoCard from '../components/InfoCard';
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
        <title>YEGYouth.Tech</title>
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

      <SectionBreak customMargin='mt-[7.5rem] mb-28' />

      <div className='font-workSans mx-auto max-w-5xl px-4' id='projects'>
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

      <div className='font-workSans mx-auto max-w-3xl px-2' id='about'>
        <div>
          <Fade bottom>
            <h1 className='mb-6 bg-gradient-to-r from-sky-300 to-emerald-300 bg-clip-text text-center font-montserrat text-4xl font-bold text-transparent'>
              About Us
            </h1>
          </Fade>
          <Fade bottom>
            <p className='mb-8 text-center text-lg text-gray-100'>
              Our mission is to foster an appreciation for the ways technology
              has changed our lives, inspiring and empowering the next
              generation of technologists in our community.
            </p>
          </Fade>
          <ExecMember
            name='Oliver Chen'
            title='President'
            image='/images/team/exec/Oliver_Chen.jpg'
            quote='Oliver loves applying his computer science skills to bring value to others. With a passion for technology, he wants to see others enjoy the benefits of its application as much as he does. He has already been involved in many initiatives including Course Companion and a COVID-19 Statistics bot. Oliver is also excited to share his experiences from participating in computing contests, hackathons, and cybersecurity contests.'
            orientation='right'
            breakLine={true}
            id={1}
          />
          <ExecMember
            name='Alex Han'
            title='VP Operations'
            image='/images/team/exec/Alex_Han.jpg'
            quote={`As someone who's interested in making an impact in his community, Alex hopes to inspire students in discovering their passion and interest for computer science. He hopes to spread this message across the city, while nurturing young talents with the appropriate resources to realize and find success in a future career opportunity. Alex intends to achieve this by streamlining internal affairs to have the most efficient output possible.`}
            orientation='left'
            breakLine={true}
            id={2}
          />
          <ExecMember
            name='David Liu'
            title='VP Public Relations'
            image='/images/team/exec/David_Liu.jpg'
            quote='An experienced competitor and a passionate person about technology. David aims to inspire others to explore the different aspects of technology that it has to offer. Through participating in clubs and contests like Cyber Patriots and the Canadian Computing Competition (CCC), David gained a better understanding about different aspects of technology. He is eager to use this opportunity to share resources to help others develop a better understanding of technology.'
            orientation='right'
            breakLine={true}
            id={3}
          />
          <ExecMember
            name='Nathan Zhao'
            title='VP Technology'
            image='/images/team/exec/Nathan_Zhao.jpg'
            quote='Nathan is a high school student at Archbishop Macdonald, who is dedicated to inspiring new people about STEM. Nathan hopes to make a big contribution to the organization so it in turn can contribute to the youth community. He works as the STEM Club Lead Executive at Mac and participates in many other activities. He hopes he can use his position to give more opportunities and share his appreciation and love for STEM.'
            orientation='left'
            breakLine={true}
            id={4}
          />
          <ExecMember
            name='Julianna H'
            title='VP Human Resources'
            image='/images/team/exec/Julianna_Huang.jpg'
            quote={`Dedicated to making a positive change, Julianna hopes to contribute by using her communication skills to this cause. Her work as the Vice President of Operations at Old Scona's Students' Union as well as an executive of multiple clubs (Geopolitics, Chinese Cultural Club, and Key Club) has allowed her to become an amazing manager. She hopes to use the skills that she has developed to help manage internal and external resources.`}
            orientation='right'
            breakLine={true}
            id={5}
          />
          <ExecMember
            name='Joshua Terry'
            title='Director of Media'
            image='/images/team/exec/Joshua_Terry.jpg'
            quote='As an avid photographer, videographer, and graphic designer, Josh hopes to contribute by using his skills to inform and encourage others to get involved in YEGYouth.Tech. Participating in CyberPatriots and having a passion for programming, Josh hopes that he can use this platform to share his love for technology with others.'
            orientation='left'
            breakLine={true}
            id={6}
          />
          <ExecMember
            name='Hao Cheng'
            title='Director of Web Dev'
            image='/images/team/exec/Hao_Cheng.jpg'
            quote='Interested in technology and making technology more accessible and enjoyable to students, Hao hopes to encourage and help students interested in the field to take the next step forward in their tech journeys. He hopes to use his skills in web and game development to help create more opportunities and events for others.'
            orientation='right'
            breakLine={true}
            id={7}
          />
          <ExecMember
            name='Evan Yin'
            title='Director of Art & Graphics'
            image='/images/team/exec/Evan_Yin.jpg'
            quote='An amazing artist and an even better thinker. Evan is the lead graphic designer for YEGYouth.Tech dedicated to creating rich and dynamic visuals. With his artistic talents and experience, Evan hopes to help attract more individuals to this organization by creating visuals for social media, events, and more.'
            orientation='left'
            breakLine={true}
            id={8}
          />
          <ExecMember
            name='Frank Li'
            title='Director of Competition Dev'
            image='/images/team/exec/Frank_Li.jpg'
            quote='Wanting to bring the joy of problem solving to every student, Frank wishes to provide the motivation and opportunities for everyone to start out in tech competitions. With years of experience in many different contests, varying from programming (CCC, USACO) to cybersecurity (CyberPatriot, PicoCTF) and time as an OSA Computer Society executive, Frank wishes to share his experience with all.'
            orientation='right'
            breakLine={false}
            id={9}
          />

          <Zoom>
            <InfoCard
              title='Did You Know?'
              body={
                <div className='text-lg'>
                  According to{' '}
                  <a
                    href='https://www.bls.gov/ooh/computer-and-information-technology/information-security-analysts.htm'
                    target='_blank'
                    rel='noreferrer'
                    className='animate-underline text-blue-400'
                  >
                    the U.S. BLS
                    <span className='text-underline'></span>
                  </a>
                  , jobs for information security analysts will grow by 35% from
                  2021 to 2031. This rate is 7 times faster than the average
                  employment growth rate of all occupations nationwide.
                </div>
              }
              margin='mt-6'
            />
          </Zoom>
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
