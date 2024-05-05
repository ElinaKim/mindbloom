import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import Logo from '../assets/logo.svg';
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <nav className='flex justify-between items-center m-4 md:mx-8 md:my-4'>
        <div className='flex items-center'>
            <img className='w-10' src={Logo} alt='site logo' />
            <h2 className='font-poppins font-extrabold text-xl'>mindbloom</h2>
        </div>
        <div>
          <ul className='flex gap-2.5'>
              <Link to="/login" className="px-2 rounded [&.active]:bg-light-grey hover:bg-light-grey">
                Login
              </Link>
              <div className='border border-grey'></div>
              <Link to="/register" className="px-2 rounded [&.active]:bg-light-grey hover:bg-light-grey">
                Register
              </Link>
          </ul>
        </div>
      </nav>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})
