import { HiChevronDown as ChevronDownIcon } from 'react-icons/hi';

import { useAnimationState } from '../context/AnimationStateContext';

export function ScrollIndicator() {
  const { animationState } = useAnimationState();
  return (
    <div
      className='absolute bottom-0 p-16'
      style={{
        opacity: !animationState ? 0 : 0.87,
        transform: !animationState
          ? `translate3d(0, -1em, 0) scale(0)`
          : `translate3d(0, 0, 0) scale(1)`,
        transition: `opacity 500ms ease-in-out 3000ms, transform 500ms ease-in-out 3000ms`,
      }}
    >
      <div
        className='bg-gray flex cursor-pointer flex-row gap-2 rounded-full p-2'
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
          });
        }}
      >
        <div className='rounded-full p-1 shadow-lg'>
          <ChevronDownIcon className='h-4 w-4 text-sky-400' />
        </div>
        <span className='animate-underline text-sky-400'>Scroll Down<span className="text-underline"></span></span>
      </div>
    </div>
  );
}
