import React from 'react';

export default function InfoCard({ title, body, margin }) {
  return (
    <div
      className={`mx-auto ${margin} max-w-lg rounded-md border-2 border-gray-100/60 p-8 shadow-lg backdrop-blur`}
    >
      <h1 className='mb-4 bg-gradient-to-r from-sky-300 to-emerald-300 bg-clip-text text-center font-montserrat text-3xl font-bold text-transparent'>
        {title}
      </h1>
      <div className='text-center leading-7 text-gray-100'>{body}</div>
    </div>
  );
}
