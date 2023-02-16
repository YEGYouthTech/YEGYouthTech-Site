import ExportedImage from 'next-image-export-optimizer';
import React from 'react';

import { useAnimationState } from '../context/AnimationStateContext';

export default function EdmontonLayer(props) {
  const { image, parallaxModifier, animationDelay, brightness } = props;
  const { animationState } = useAnimationState();
  const ref = React.useRef(null);

  React.useEffect(() => {
    const listener = () => {
      if (!ref.current) return;
      ref.current.style.transform = `translate3d(0, ${Math.round(
        ((document.documentElement.scrollTop || document.body.scrollTop) /
          window.innerHeight) *
          parallaxModifier *
          10 +
          1
      )}px, 0)`;
    };
    window.addEventListener('scroll', listener);

    return () => {
      window.removeEventListener('scroll', listener);
    };
  });

  return (
    <div
      className='absolute h-full w-full object-cover object-left-bottom'
      ref={ref}
      style={{
        filter: `brightness(${brightness}%)`,
        transition: `bottom 0.5s ease-out ${animationDelay}s, opacity 0.5s ease-out ${animationDelay}s, transform 10ms linear`,
        bottom: !animationState ? `calc(100px - 80vh)` : `0`,
        opacity: !animationState ? 0 : 1,
      }}
    >
      <ExportedImage src={image} alt='' layout='fill' priority />
    </div>
  );
}
