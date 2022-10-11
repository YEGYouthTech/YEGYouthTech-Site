export default function ExecMember({ name, title, image }) {
  return (
    <div className='mb-6 w-1/5 px-1'>
      <div className='flex flex-col'>
        <img
          className='rounded-2xl drop-shadow-md transition-all delay-100 duration-200 hover:drop-shadow-xl'
          src={image}
        />
        <div className='mt-6 text-center'>
          <h1 className='mb-1 text-xs font-bold text-gray-100'>{name}</h1>
          {title && (
            <div className='leading-2 mb-2 text-xs font-light text-gray-300'>
              {title}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
