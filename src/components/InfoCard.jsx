import React from 'react';

export default function InfoCard({ title, body }) {
  return (
    <div className='mx-auto mt-8 max-w-lg rounded-2xl bg-gradient-to-r from-sky-200/10 to-sky-300/10 p-8 shadow-lg backdrop-blur'>
      <h1 className='mb-4 bg-gradient-to-r from-sky-300 to-emerald-300 bg-clip-text text-center font-montserrat text-2xl font-bold text-transparent'>
        {title}
      </h1>
      <div className='text-center leading-7 text-white/[.89]'>
        {body}
      </div>
    </div>
  );
}