import { AiFillGithub, AiOutlineLink } from 'react-icons/ai';
import { InView } from 'react-intersection-observer';
import Fade from 'react-reveal/Fade';

export default function Project(props) {
  const {
    name,
    description,
    disclaimer,
    logo,
    link,
    gradientFrom,
    gradientTo,
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
          <div className='relative flex max-h-[12rem] w-full justify-center p-8'>
            <img
              src={logo}
              alt={`${name} logo`}
              className='h-auto h-fit w-fit max-h-full max-w-full'
            />
          </div>
          <h2
            className='!bg-clip-text text-center text-3xl font-bold text-transparent'
            style={{
              background: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})`,
            }}
          >
            {name}
          </h2>
          <p className='mt-4 text-center leading-7 text-white/[.87]'>
            {description}
          </p>
          {disclaimer && (
            <p className='mt-4 text-center text-sm leading-7 text-gray-300/[.87]'>
              {disclaimer}
            </p>
          )}
          <div className='mt-4 flex w-full flex-row items-center justify-center gap-4'>
            <a
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className='flex flex-row items-center gap-1 text-center text-blue-500 hover:text-blue-400'
            >
              <AiOutlineLink size={24} />
              <span className='text-xl'>Live Demo</span>
            </a>
            <a
              href={github}
              target='_blank'
              rel='noopener noreferrer'
              className='flex flex-row items-center gap-1 text-center text-blue-500 hover:text-blue-400'
            >
              <AiFillGithub size={24} />
              <span className='text-xl'>GitHub</span>
            </a>
          </div>
        </div>
        <div className='mt-4 flex w-full flex-row items-center justify-center gap-1'>
          {contributors.map((contributor, index) => (
            <a
              href={contributor.link}
              target='_blank'
              rel='noopener noreferrer'
              key={index}
              className='group relative hover:z-10'
            >
              {(!contributor.more && (
                <img
                  src={contributor.avatar}
                  alt={`${contributor.name} avatar`}
                  className='h-8 w-8 rounded-full transition-all duration-300 group-hover:scale-150 group-hover:shadow-lg'
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
            <img
              src={image}
              alt='Project screenshot'
              className='animate-textFloat w-full'
            />
          </Fade>
        </div>
      )) ||
        (image && imageSmall && (
          <Fade right>
            <div className='relative mt-24 flex w-full flex-col items-start justify-center md:mt-0 md:w-1/2'>
              <div>
                <img
                  src={image}
                  alt='Project screenshot'
                  className='animate-textFloat w-3/4 -rotate-[8deg]'
                />
              </div>
              <img
                src={imageSmall}
                alt='Project screenshot'
                className='animate-textFloat absolute bottom-0 right-0 w-1/3 -translate-y-1/4 rotate-[8deg]'
              />
            </div>
          </Fade>
        )) || <></>}
    </div>
  );
}
