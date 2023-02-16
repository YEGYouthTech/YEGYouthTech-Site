import Image from 'next/image';
import React from 'react';
// import { BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs';
import Zoom from 'react-reveal/Zoom';

export default function ExecMember({
  name,
  title,
  image,
  // quote,
  // orientation,
  // breakLine,
  id,
}) {
  return (
    <Zoom delay={id * 100}>
      <div className='w-1/5 px-1'>
        <div className='flex flex-col'>
          <div className='relative aspect-square w-full'>
            <Image
              className='rounded-md border-2 border-neutral-800 drop-shadow-md transition-all delay-100 duration-200'
              src={image}
              alt='Executive team images'
              layout='fill'
            />
          </div>
          <div className='mt-4 text-center'>
            <h1 className='mb-1 font-montserrat text-xs font-bold text-gray-100'>
              {name}
            </h1>
            {title && (
              <div className='mb-2 text-xs font-light text-gray-300'>
                {title}
              </div>
            )}
          </div>

          {/* <div className='w-full px-1'>
        <div className='flex flex-col'>
          <img
            className='rounded-md border-2 border-neutral-800 drop-shadow-md transition-all delay-100 duration-500 hover:drop-shadow-xl'
            src={image}
            alt='Executive team images'
          />
          <div className='mt-4 text-center'>
            <h1 className='mb-1 font-montserrat text-xs font-bold text-gray-100'>
              {name}
            </h1>
            {title && (
              <div className='mb-2 text-xs font-light text-gray-300'>
                {title}
              </div>
            )}
          </div> */}

          {/* {orientation == 'right' ? (
            <div className='flex flex-row items-center justify-center gap-12'>
              <div className='flex flex-col items-end justify-center'>
                <h2 className='font-montserrat text-3xl text-gray-100'>
                  {name}
                </h2>
                <span className='text-lg text-gray-100'>{title}</span>
                <p className='text-right text-gray-100/60'>{quote}</p>
              </div>
              <img
                className='w-[15rem] rounded-md'
                src={image}
                alt='Executive team images'
              />
            </div>
          ) : (
            <div className='flex flex-row items-center justify-center gap-12'>
              <img
                className='w-[12rem] rounded-md'
                src={image}
                alt='Executive team images'
              />
              <div className='flex flex-col items-start justify-center'>
                <h2 className='font-montserrat text-3xl text-gray-100'>
                  {name}
                </h2>
                <span className='text-lg text-gray-100'>{title}</span>
                <p className='text-left text-lg text-gray-100/60'>{quote}</p>
              </div>
            </div>
          )}

          {breakLine && <hr className='m-auto my-10 w-24 border-gray-100/60' />} */}
        </div>
      </div>
    </Zoom>
  );
}
