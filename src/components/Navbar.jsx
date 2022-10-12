import React, { useState } from 'react';
import { useAnimationState } from '../context/AnimationStateContext';

export default function Navbar() {
  const [isClicked, setIsClicked] = useState(false);
  const { animationState } = useAnimationState();

  // const pageLinks = [{ "Home": "#" }, { "CoT": "#cot" }, { "Projects": "#projects" }, { "About": "#about" }, { "Opportunities": "#opportunities" }, { "Puzzle Week": "#puzzle-week" }];
  const pageLinks = [{ "Home": "#" }, { "CoT": "#cot" }, { "Projects": "#projects" }, { "Join Us": "#join-us" }, { "Team": "#team" }];

  function handleClick() {
    setIsClicked((prev) => !prev);
  }

  return (
    <nav
      className="fixed top-[2.5rem] tn:inset-x-0 tn:mx-auto md:left-auto md:translate-x-0 md:right-[2.5rem] z-50 w-[14rem] bg-neutral-900 px-4 py-4 rounded-md border-2 border-neutral-800"
      style={{
        opacity: !animationState ? 0 : 1,
        transform: !animationState
          ? `translate3d(100%, 0, 0)`
          : `translate3d(0, 0, 0)`,
        transition: `opacity 500ms ease-in-out 1800ms, transform 500ms ease-in-out 1800ms`,
      }}
    >
      <div className="flex flex-row items-center justify-between">
        <div>
          <a href="#">
            <img
              src="https://avatars.githubusercontent.com/u/113301687?s=200&v=4"
              alt="Logo"
              className="rounded-md w-11"
            />
          </a>
        </div>

        <div className="w-9 h-6 flex flex-col items-center justify-between cursor-pointer group" onClick={handleClick}>
          <span className="w-full h-[3px] bg-gray-100/75 rounded-md ml-auto transition-colors duration-200 ease-in-out group-hover:bg-gray-100" />
          <span className="w-3/4 h-[3px] bg-gray-100/75 rounded-md ml-auto transition-colors duration-200 ease-in-out group-hover:bg-gray-100" />
          <span className="w-2/4 h-[3px] bg-gray-100/75 rounded-md ml-auto transition-colors duration-200 ease-in-out group-hover:bg-gray-100" />
        </div>
      </div>

      {isClicked &&
        <div className="mt-4 text-center">
          <ul>
            {pageLinks.map((links, index) => {
              const data = [];

              for (let i in links) {
                data.push(i);
                data.push(links[i])
              }

              return (
                <li
                  key={index}
                  className={index > 0 && index < pageLinks.length - 1 ? "my-2" : "m-0"}
                >
                  <a href={data[1]} className="text-md text-gray-100/75 transition-colors duration-200 ease-in-out hover:text-gray-100" onClick={handleClick}>{data[0]}</a>
                </li>
              );
            })}
          </ul>
        </div>
      }
    </nav>);
}