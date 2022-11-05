import React from 'react';

export default function SectionBreak(props) {
  const { customMargin } = props;

  return (
    <hr
      className={`${
        customMargin ? customMargin : 'my-28'
      } mx-auto w-44 max-w-[40%] border-[1.2rem] border-x-0 border-b-0 border-dotted border-gray-100/60`}
    />
  );
}
