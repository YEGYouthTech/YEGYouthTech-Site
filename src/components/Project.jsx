export default function Project(props) {
  const {
    name,
    description,
    logo,
    link,
    gradientFrom,
    gradientTo,
    image,
    imageSmall,
    github,
    contributors,
  } = props;

  return (
    <div className='flex w-full flex-col items-center items-stretch justify-center gap-8 md:flex-row'>
      <div className='flex w-full flex-col items-center justify-center md:w-1/2'>
        <div className='flex w-full flex-col items-center justify-center'>
          <div className='relative flex h-48 w-full justify-center p-8'>
            <img
              src={logo}
              alt={`${name} logo`}
              className='w-fill h-auto max-h-full'
            />
          </div>
          <h2
            className='!bg-clip-text text-center text-3xl font-bold text-transparent'
            style={{
              background: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})`,
            }}
          >
            {name}
          </h2>
          <p className='mt-4 text-center leading-7 text-white/[.87]'>
            {description}
          </p>
          <div className='mt-4 flex w-full flex-row items-center justify-center'>
            <a
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className='text-center text-blue-500 hover:text-blue-700'
            >
              <span className='text-2xl'>🔗</span>
              <span className='text-xl'>Live Demo</span>
            </a>
            <a
              href={github}
              target='_blank'
              rel='noopener noreferrer'
              className='text-center text-blue-500 hover:text-blue-700'
            >
              <span className='text-2xl'>🔗</span>
              <span className='text-xl'>GitHub</span>
            </a>
          </div>
        </div>
        <div className='flex w-full flex-row items-center justify-center'>
          {contributors.map((contributor, index) => (
            <a
              href={contributor.link}
              target='_blank'
              rel='noopener noreferrer'
              className='text-center text-blue-500 hover:text-blue-700'
              key={index}
            >
              <span className='text-2xl'>🔗</span>
              <span className='text-xl'>{contributor.name}</span>
            </a>
          ))}
        </div>
      </div>
      <div className='flex w-full flex-col items-center justify-center md:w-1/2'>
        <img src={image} alt='Project screenshot' className='w-full' />
      </div>
    </div>
  );
}
