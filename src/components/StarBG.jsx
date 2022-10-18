import React from 'react';
import Starback from 'starback';

import { useAnimationState } from '../context/AnimationStateContext';

export const StarBG = (props) => {
  const canvasRef = React.useRef(null);
  const { animationState } = useAnimationState();

  React.useEffect(() => {
    if (canvasRef.current) {
      const starback = new Starback(canvasRef.current, {
        type: 'dot',
        quantity: 200,
        direction: 0,
        backgroundColor: "#0e0e0e",
        // randomOpacity: [0, 0.3],
        width: window.innerWidth,
        height: window.innerHeight,
        starColor: ['#A448EA', '#9CB3F0', '#100F64'],
        speed: [0.4, 1],
        showfps: true,
      });
      console.log(starback);
      let lastpos =
        document.documentElement.scrollTop || document.body.scrollTop;
      let lastTime = Date.now();
      const onScroll = () => {
        const now = Date.now();
        const delta = now - lastTime;
        lastTime = now;
        const pos =
          (document.documentElement.scrollTop || document.body.scrollTop) ?? 0;
        const deltaPos = pos - lastpos;
        const deltaPosAsPercent =
          (deltaPos * 8000) / document.documentElement.scrollHeight ||
          document.body.scrollHeight;
        lastpos = pos;
        // console.log(deltaPosAsPercent);
        starback.setSpeedMultiplier(
          deltaPosAsPercent / delta < 1
            ? deltaPosAsPercent / delta
            : (deltaPosAsPercent * 5) / delta
        );
      };
      const to = setInterval(() => {
        // console.log(starback.speedMultiplier);
        if (starback.speedMultiplier < -0.2)
          starback.speedMultiplier -= starback.speedMultiplier / 2;
        else if (starback.speedMultiplier > 1)
          starback.speedMultiplier -= starback.speedMultiplier / 2;
        else if (starback.speedMultiplier < 1) starback.speedMultiplier = 1;
      }, 100);
      window.addEventListener('scroll', onScroll);
      return () => {
        clearInterval(to);
        window.removeEventListener('scroll', onScroll);
      };
    }
  }, [canvasRef.current]);

  return (
    <>
      <div
        className="fixed inset-0 w-screen h-screen top-0"
        style={{
          background: '#0e0e0e',
          //   'radial-gradient(circle at center, #001358 0%, #010e42 100%)',
          zIndex: -1,
        }}
      ></div>
      <canvas
        ref={canvasRef}
        className="w-full h-screen fixed inset-0 transition-opacity duration-[1000ms] delay-[1500ms]"
        style={{
          zIndex: -1,
          opacity: !animationState ? 0 : 1,
        }}
      />
    </>
  );
};
