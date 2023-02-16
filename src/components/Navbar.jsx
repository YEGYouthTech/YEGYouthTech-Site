import ExportedImage from 'next-image-export-optimizer';
import React, { useState } from 'react';

import { useAnimationState } from '../context/AnimationStateContext';

export default function Navbar() {
  const [isClicked, setIsClicked] = useState(false);
  const { animationState } = useAnimationState();

  // const pageLinks = [{ "Home": "#" }, { "CoT": "#cot" }, { "Projects": "#projects" }, { "About": "#about" }, { "Opportunities": "#opportunities" }, { "Puzzle Week": "#puzzle-week" }];
  const pageLinks = [{ Home: '/#' }, { CoT: '/cot' }, { About: '/about' }];

  function handleClick() {
    setIsClicked((prev) => !prev);
  }

  return (
    <nav
      className='fixed top-[2.5rem] z-50 w-[14rem] rounded-md border-2 border-neutral-800 bg-neutral-900 px-4 py-4 tn:inset-x-0 tn:mx-auto md:left-auto md:right-[2.5rem] md:translate-x-0'
      style={{
        opacity: !animationState ? 0 : 1,
        transform: !animationState
          ? `translate3d(100%, 0, 0)`
          : `translate3d(0, 0, 0)`,
        transition: `opacity 500ms ease-in-out 1800ms, transform 500ms ease-in-out 1800ms`,
      }}
    >
      <div className='flex flex-row items-center justify-between'>
        <div>
          <a href='#'>
            <ExportedImage
              src='images/others/logo.png'
              alt='Logo'
              className='rounded-md'
              width={44}
              height={44}
            />
          </a>
        </div>

        <div
          className='group flex h-6 w-9 cursor-pointer flex-col items-center justify-between'
          onClick={handleClick}
        >
          <span className='ml-auto h-[3px] w-full rounded-md bg-gray-100/60 transition-colors duration-500 ease-in-out group-hover:bg-gray-100' />
          <span className='ml-auto h-[3px] w-3/4 rounded-md bg-gray-100/60 transition-colors duration-500 ease-in-out group-hover:bg-gray-100' />
          <span className='ml-auto h-[3px] w-2/4 rounded-md bg-gray-100/60 transition-colors duration-500 ease-in-out group-hover:bg-gray-100' />
        </div>
      </div>

      {isClicked && (
        <div className='mt-4 text-center'>
          <ul>
            {pageLinks.map((links, index) => {
              const data = [];

              for (let i in links) {
                data.push(i);
                data.push(links[i]);
              }

              return (
                <li
                  key={index}
                  className={
                    index > 0 && index < pageLinks.length - 1 ? 'my-2' : 'm-0'
                  }
                >
                  <a
                    href={data[1]}
                    className='text-[1.125rem] text-gray-100/60 transition-colors duration-500 ease-in-out hover:text-gray-100'
                    onClick={handleClick}
                  >
                    {data[0]}
                  </a>{' '}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
