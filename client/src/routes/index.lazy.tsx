import { createLazyFileRoute, Link } from '@tanstack/react-router';
import CherryBlossom from '../assets/images/cherry-blossom.png';
import Arrow from '../assets/icons/arrow.svg';

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <>
      <main className='p-8 flex flex-col items-center gap-2 text-center'>
        <h2 className='text-center text-balance max-w-[90%]'>
          <span className='font-kumbh-bold font-semibold text-xl md:text-4xl'>
            Plant your thoughts, cultivate your plans, bloom your productivity - all with mindbloom
          </span>
        </h2>
        <p className='md:text-xl'>Transform thoughts into accomplishments with an intuitive to-do app.</p>
        <button className='bg-pink max-w-32 m-4 md:my-8 px-5 py-1.5 rounded'><Link to="/register">Get Started</Link></button>
      </main>
      <section className='self-end p-0'>
        <div className=''>
          <img className='opacity-60' src={CherryBlossom} alt='cherry blossom' />
        </div>
        <a className='self-end' href="https://github.com/ElinaKim/mindbloom" target="_blank" rel="noopener noreferrer">
          <div className='flex items-center gap-2 p-4'>
            <h3 className='text-sm'>Check out my code on GitHub</h3>
            <img className='w-8' src={Arrow} alt='arrow' />
          </div>
        </a>
      </section>
    </>
  )
}
