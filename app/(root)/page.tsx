import Link from 'next/link';

export default function HomePage() {
  const title = 'GPTGenius';
  const description =
    "GPTGenius: The AI language companion you've been seeking. Driven by OpenAI, it elevates your discussions, content crafting, and much more!";
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-6xl font-bold text-primary'>{title}</h1>
          <p className='py-6 leading-loose'>{description}</p>
          <Link href='/chat'>
            <button className='btn btn-secondary'>Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
