import React from 'react';

export default function ComponentOfTechnology(props) {
  const {
    name,
    gradientFrom,
    gradientTo,
    direction,
    customMargin,
  } = props;
  const [scrollState, setScrollState] = React.useState(1);
  const ref = React.useRef(null);
  const ref2 = React.useRef(null);

  React.useEffect(() => {
    const listener = () => {
      setScrollState(
        document.documentElement.scrollTop || document.body.scrollTop
      );
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const progress =
          (scrollState -
            (scrollState + rect.y) +
            window.innerHeight -
            rect.height) /
          window.innerHeight;
        ref.current.style.transform = `translate3d(${
          ((direction === 'left' && -1) || 1) * (progress * 10 - 10)
        }%, 0, 0)`;
        ref2.current.style.transform = `translate3d(${
          ((direction === 'right' && -1) || 1) *
          (Math.min(progress * 1.5, 1) * 100 - 100)
        }%, 0, 0)`;
      }
    };
    window.addEventListener('scroll', listener);

    return () => {
      window.removeEventListener('scroll', listener);
    };
  });

  return (
    <div className={`${customMargin ? customMargin : 'my-[8vh]'} opacity-[.87]`}>
      <h1
        className='align-right !bg-clip-text pb-8 text-4xl font-bold text-transparent sm:text-5xl md:text-6xl lg:text-7xl'
        ref={ref}
        style={{
          background: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})`,
          textAlign: direction,
          transition: 'transform 0.5s ease-out',
        }}
      >
        {name}
      </h1>
      <div
        className='w-full overflow-hidden'
        ref={ref2}
        style={{
          transition: 'transform 0.5s ease-out',
        }}
      >
        <div
          className='min-h-[2px] w-full'
          style={{
            background: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})`,
          }}
        />
      </div>
    </div>
  );
}
