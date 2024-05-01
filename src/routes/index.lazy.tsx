import { createLazyFileRoute } from '@tanstack/react-router'

import CherryBlossom from '../assets/images/cherry-blossom.png'
import Arrow from '../assets/icons/arrow.svg'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <>
      <main className='p-8 flex flex-col items-center gap-2'>
          <h2 className='text-center text-balance'>
              <span className='font-extrabold text-xl md:text-4xl'>
                  Plant your thoughts, cultivate your plans, bloom your productivity - all with mindbloom
              </span>
          </h2>
          <button className='bg-green hover:bg-darker-green max-w-32 m-4 px-5 py-1.5 rounded-md'>Get Started</button>
      </main>
      <footer className='justify-self-end flex justify-between p-0 mt-auto'>
            <img className='' src={CherryBlossom} alt='cherry blossom' />
            <div className='flex items-center gap-2 p-4'>
                <h3>Check out my code on GitHub</h3>
                <img className='w-8' src={Arrow} alt='arrow' />
            </div>
        </footer>
    </>
  )
}
