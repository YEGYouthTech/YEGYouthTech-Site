import React from 'react';

export default function InfoCard({
  title,
  body,
  margin,
  titleClass,
  className,
}) {
  return (
    <div
      className={`mx-auto ${margin} ${className} rounded-md border-2 border-gray-100/60 p-8 shadow-lg backdrop-blur`}
    >
      <h1
        className={`${titleClass} mb-4 bg-gradient-to-r bg-clip-text text-center font-montserrat text-3xl font-bold text-transparent`}
      >
        {title}
      </h1>
      <div className='text-center leading-7 text-gray-100'>{body}</div>
    </div>
  );
}
