import { ScrollIndicator } from './ScrollIndicator';
import { useAnimationState } from '../context/AnimationStateContext';

export function HeroTitle() {
  const { animationState } = useAnimationState();

  return (
    <div className='absolute flex h-full w-full flex-col items-center justify-center'>
      <div>
        <h1
          className='animate-textFloat h-[1em] bg-gradient-to-br from-emerald-400 to-sky-500 bg-clip-text font-montserrat text-[10vw] font-extrabold leading-none text-transparent drop-shadow-2xl sm:text-[11vw]'
          style={{
            opacity: !animationState ? 0 : 1,
            transform: !animationState
              ? `translate3d(0, 100%, 0)`
              : `translate3d(0, 0, 0)`,
            transition: `opacity 500ms ease-in-out 800ms, transform 500ms ease-in-out 800ms`,
          }}
        >
          YEGYouth.Tech
        </h1>
      </div>
      <div>
        <h2
          className='font-wsans h-[1.2em] text-center text-[3.2vw] font-bold leading-none text-gray-100 drop-shadow-2xl'
          style={{
            opacity: !animationState ? 0 : 1,
            transform: !animationState
              ? `translate3d(0, 100%, 0)`
              : `translate3d(0, 0, 0)`,
            transition: `opacity 500ms ease-in-out 1200ms, transform 500ms ease-in-out 1200ms`,
          }}
        >
          Edmonton Youth Technology Organization
        </h2>
      </div>

      <ScrollIndicator />
    </div>
  );
}
