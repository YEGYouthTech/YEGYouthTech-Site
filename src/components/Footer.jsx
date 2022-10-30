import React from 'react';

export default function Footer(props) {
  const { message, imgData } = props;

  return (
    <div className='border-t border-neutral-800 bg-neutral-900'>
      <div className='mx-auto max-w-6xl py-8 px-4'>
        <p className='text-center text-lg text-gray-100'>{message}</p>
        <div className='mt-6 flex items-center justify-center gap-6'>
          {imgData.map((data, index) => {
            const { link, altText, src } = data;

            return (
              <a
                key={index}
                href={link}
                target='_blank'
                rel='noreferrer'
                className='opacity-[.8] transition-opacity duration-500 ease-in-out hover:opacity-[.6]'
              >
                <img className='w-32' src={src} alt={altText} />
              </a>
            );
          })}
        </div>
        <hr className='m-auto my-8 w-24 border-gray-100/60' />
        <p className='text-center text-gray-100/60'>
          &copy; {new Date().getFullYear()} Edmonton Youth Technology
          Organization (YEGYouth.Tech)
          <br />
          All rights reserved
        </p>
      </div>
    </div>
  );
}
