import { useEffect } from 'react';
import {
  createFileRoute,
  Link,
  Outlet,
  redirect,
  useRouter,
} from '@tanstack/react-router';
import Logo from '../assets/logo.svg';
import { useAuth } from '../auth';

export const Route = createFileRoute('/_auth')({
  beforeLoad: async ({ context }) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({
        to: '/login'
      })
    }
  },
  component: AuthLayout
})

function AuthLayout() {
  const router = useRouter()
  const navigate = Route.useNavigate()
  const auth = useAuth()

  useEffect(() => {
    if (!auth.isAuthenticated) {
      router.invalidate().finally(() => {
        navigate({ to: '/login' })
      })
    }
  }, [])

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      auth.logout()
      router.invalidate().finally(() => {
        navigate({ to: '/' })
      })
    }
  }

  return (
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
            <button
              className="px-2 rounded [&.active]:bg-light-grey hover:bg-light-grey"
              onClick={handleLogout}
            >
              Logout
            </button>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  )
}
