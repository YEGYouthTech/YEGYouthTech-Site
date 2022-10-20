import React from 'react';

export default function Button(props) {
  const { link, target, text } = props;

  return (
    // <a
    //   href={link}
    //   className='m-auto inline-flex items-center rounded-md border-2 border-gray-200/60 px-8 py-3 font-bold text-gray-200'
    //   target={target}
    //   rel={target == '_blank' && 'noreferrer'}
    // >
    //   {text}
    // </a>
    <a
      href={link}
      class='group relative inline-block inline-flex items-center justify-start overflow-hidden rounded-md px-6 py-3 font-bold'
      target={target}
      rel={target == '_blank' && 'noreferrer'}
    >
      <span class='absolute left-0 top-0 h-32 w-32 translate-x-12 -translate-y-2 rotate-45 bg-gray-200 opacity-[3%]'></span>
      <span class='absolute top-0 left-0 -mt-1 h-48 w-48 -translate-x-56 -translate-y-24 rotate-45 bg-gray-200 opacity-100 transition-transform duration-500 ease-in-out group-hover:-translate-x-8'></span>
      <span class='relative w-full text-gray-200 transition-colors duration-200 ease-in-out group-hover:text-[#0e0e0e]'>
        {text}
      </span>
      <span class='absolute inset-0 rounded-md border-2 border-gray-200/60'></span>
    </a>
  );
}
