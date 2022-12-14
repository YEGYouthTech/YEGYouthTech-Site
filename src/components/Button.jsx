import React from 'react';

export default function Button(props) {
  const { link, target, text } = props;

  return (
    <a
      href={link}
      className='group relative inline-block inline-flex min-w-[6rem] items-center justify-start overflow-hidden rounded-md px-6 py-3 font-bold'
      target={target}
      rel={target == '_blank' && 'noreferrer'}
    >
      <span className='absolute left-0 top-0 h-32 w-32 translate-x-12 -translate-y-2 rotate-45 bg-transparent opacity-[3%]'></span>
      <span className='absolute top-0 left-0 -mt-1 h-48 w-48 -translate-x-56 -translate-y-24 rotate-45 bg-gray-100 opacity-100 transition-transform duration-500 ease-in-out group-hover:-translate-x-8'></span>
      <span className='relative w-full font-montserrat text-gray-100 transition-colors duration-500 ease-in-out group-hover:text-[#0e0e0e]'>
        {text}
      </span>
      <span className='absolute inset-0 rounded-md border-2 border-gray-100/60'></span>
    </a>
  );
}
