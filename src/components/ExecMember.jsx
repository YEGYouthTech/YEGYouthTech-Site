import React from 'react';
import Zoom from 'react-reveal/Zoom';

export default function ExecMember({
  name,
  title,
  image,
  quote,
  orientation,
  id,
}) {
  return (
    <Zoom delay={id * 100}>
      <div className='w-1/5 px-1'>
        <div className='flex flex-col'>
          {/* <img
            className='rounded-md border-2 border-neutral-800 drop-shadow-md transition-all delay-100 duration-200 hover:drop-shadow-xl'
            src={image}
            alt='Executive team images'
          />
          <div className='mt-4 text-center'>
            <h1 className='mb-1 text-xs font-bold text-gray-100 font-montserrat'>{name}</h1>
            {title && (
              <div className='mb-2 text-xs font-light text-gray-300'>
                {title}
              </div>
            )}
          </div> */}
          {orientation == 'right' ? (
            <div className='flex'>
              <img
                className='rounded-md'
                src={image}
                alt='Executive team images'
              />
            </div>
          ) : (
            <div className='flex'>
              <img
                className='rounded-md'
                src={image}
                alt='Executive team images'
              />
            </div>
          )}
        </div>
      </div>
    </Zoom>
  );
}
