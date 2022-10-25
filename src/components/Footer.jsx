import React from 'react';

export default function Footer(props) {
  const { message, imgData } = props;

  return (
    <div className='bg-neutral-900 border-t border-neutral-800'>
      <div className='mx-auto max-w-6xl py-8 px-4'>
        <p className='text-center text-lg text-white/[.87]'>{message}</p>
        <div className='mt-6 flex items-center justify-center gap-6'>
          {imgData.map((data, index) => {
            const { link, altText, src } = data;

            return (
              <a
                key={index}
                href={link}
                target='_blank'
                rel='noreferrer'
                className='opacity-[.87] transition-opacity duration-500 ease-in-out hover:opacity-[.7]'
              >
                <img className='w-32' src={src} alt={altText} />
              </a>
            );
          })}
        </div>
        <hr className='m-auto my-8 w-24 border-gray-200/60' />
        <p className='text-center text-white/60'>
          &copy; {new Date().getFullYear()} Edmonton Youth Technology
          Organization (YEGYouth.Tech)
          <br />
          All rights reserved
        </p>
      </div>
    </div>
  );
}
