import ExportedImage from 'next-image-export-optimizer';
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai';
import { InView } from 'react-intersection-observer';
import Fade from 'react-reveal/Fade';

import Button from './Button';

export default function Project(props) {
  const {
    name,
    description,
    disclaimer,
    logo,
    link,
    // gradientFrom,
    // gradientTo,
    image,
    imageSmall,
    github,
    contributors,
  } = props;

  return (
    <div className='flex w-full flex-col items-center items-stretch justify-center gap-8 md:flex-row'>
      <InView
        as='div'
        onChange={(inView, entry) => {
          if (inView) {
            entry.target.classList.toggle('fadeInRight', inView);
            entry.target.classList.toggle('notFadeInRight', !inView);
          }
        }}
        className='notFadeInRight flex w-full flex-col items-center justify-center md:w-1/2'
      >
        <div className='flex w-full flex-col items-center justify-center'>
          <div className='mb-7'>
            <ExportedImage
              src={logo}
              alt={`${name} logo`}
              width={288}
              height={124}
              sizes='100vw'
            />
          </div>
          <h2
            // className={`bg-gradient-to-r text-center font-montserrat text-3xl font-bold from-${gradientFrom} to-${gradientTo} bg-clip-text text-transparent`}
            className='text-center font-montserrat text-3xl font-bold text-gray-100'
          >
            {name}
          </h2>
          <p className='mt-6 text-center text-lg leading-7 text-gray-100'>
            {description}
          </p>
          {disclaimer && (
            <p className='mt-4 text-center leading-7 text-gray-100/60'>
              {disclaimer}
            </p>
          )}
          <div className='mt-6 flex w-full flex-row items-center justify-center gap-4'>
            <Button
              link={link}
              target='_blank'
              text={
                <div className='flex flex-row items-center gap-1'>
                  <AiFillGithub size={24} />
                  <span>Demo</span>
                </div>
              }
            />
            <Button
              link={github}
              target='_blank'
              text={
                <div className='flex flex-row items-center gap-1'>
                  <AiOutlineLink size={24} />
                  <span>Github</span>
                </div>
              }
            />
          </div>
        </div>
        <div className='mt-8 flex w-full flex-row items-center justify-center gap-1'>
          {contributors.map((contributor, index) => (
            <a
              href={contributor.link}
              target='_blank'
              rel='noopener noreferrer'
              key={index}
              className='group relative hover:z-10'
            >
              {(!contributor.more && (
                <ExportedImage
                  src={contributor.avatar}
                  alt={`${contributor.name} avatar`}
                  className='h-8 w-8 rounded-full transition-all duration-300 group-hover:scale-150 group-hover:shadow-lg'
                  width={32}
                  height={32}
                  sizes='32px'
                />
              )) || (
                <div className='flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 transition-all duration-300 group-hover:scale-150 group-hover:shadow-lg'>
                  <span className='text-md text-gray-300'>
                    {contributor.more}+
                  </span>
                </div>
              )}
              <div className='absolute bottom-0 left-1/2 mb-9 hidden -translate-x-1/2 flex-col items-center group-hover:flex'>
                <span className='relative z-10 whitespace-nowrap bg-black/80 p-2 text-xs leading-none text-white shadow-lg'>
                  {contributor.name}
                </span>
                <div className='-mt-2 h-3 w-3 rotate-45 bg-black'></div>
              </div>
            </a>
          ))}
        </div>
      </InView>
      {(image && !imageSmall && (
        <div className='flex w-full flex-col items-center justify-center md:w-1/2'>
          <Fade right>
            <img src={image} alt='Project screenshot' className='w-full' />
          </Fade>
        </div>
      )) ||
        (image && imageSmall && (
          <Fade right>
            <div className='relative flex w-full flex-col items-start justify-center pt-24 md:mt-0 md:w-1/2'>
              <div className='animate-textFloat'>
                <img
                  src={image}
                  alt='Project screenshot'
                  className='w-3/4 -translate-y-[-5%] -rotate-[8deg]'
                />
              </div>
              <div className='h-full w-full animate-textFloat'>
                <img
                  src={imageSmall}
                  alt='Project screenshot'
                  className='absolute bottom-0 right-0 w-1/3 -translate-y-[2%] rotate-[8deg]'
                />
              </div>
            </div>
          </Fade>
        )) || <></>}
    </div>
  );
}
