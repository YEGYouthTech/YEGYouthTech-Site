import { useAnimationState } from '../context/AnimationStateContext';
import { HiChevronDown as ChevronDownIcon } from 'react-icons/hi';

export function ScrollIndicator() {
  const { animationState } = useAnimationState();
  return (
    <div
      className={`absolute bottom-0 p-16`}
      style={{
        opacity: !animationState ? 0 : 0.87,
        transform: !animationState
          ? `translate3d(0, -1em, 0) scale(0)`
          : `translate3d(0, 0, 0) scale(1)`,
        transition: `opacity 500ms ease-in-out 3000ms, transform 500ms ease-in-out 3000ms`,
      }}
    >
      <div
        className={`bg-gray rounded-full p-2 flex flex-row gap-2 animate-bounce-mini`}
      >
        <div className={`p-1 rounded-full shadow-lg`}>
          <ChevronDownIcon className={`text-sky-400 w-4 h-4`} />
        </div>
        <span className={`text-sky-400 pr-2`}>Scroll Down</span>
      </div>
    </div>
  );
}
