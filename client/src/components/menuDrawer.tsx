import UpcomingIcon from '../assets/icons/upcoming.svg';
import TodayIcon from '../assets/icons/today.svg';
import SignOutIcon from '../assets/icons/signout.svg';
import { Link } from '@tanstack/react-router';


interface DrawerProps {
  isOpen: boolean
  closeDrawer: () => void
}

export function MenuDrawer({ isOpen, closeDrawer }: DrawerProps) {
  return (
    <div className={`${isOpen ? 'w-72 backdrop-blur-sm' : 'w-0'} h-[90vh] bg-white shadow-md shadow-grey rounded-md transition-all duration-500 flex flex-col`}>
      <div className='flex justify-between p-4'>
        <h1 className='font-kumbh-bold text-2xl'>Menu</h1>
        <button onClick={closeDrawer} className="text-grey focus:outline-none">&#10005;</button>
      </div>
      <div className='m-4 flex flex-col h-[100%] gap-8'>
        <h2 className='mt-8 text-xl'>Tasks</h2>
        <Link to='/tasks/upcoming'><div className='flex align-center gap-2 p-2 rounded hover:bg-light-grey'>
          <img className='w-6' src={UpcomingIcon} alt='upcoming tasks icon'></img>
          <h3 className='text-lg'>Upcoming</h3>
        </div>
        </Link>
        <div className='flex align-center gap-2 p-2 rounded hover:bg-light-grey'>
          <img className='w-6' src={TodayIcon} alt='upcoming tasks icon'></img>
          <Link to='/tasks/today'><h3 className='text-lg'>Today</h3></Link>
        </div>
      </div>
      <div className='m-4 self-end flex align-center gap-2'>
        <img className='w-6' src={SignOutIcon} alt='sign out icon'></img>
        <h2>Sign Out</h2>
      </div>
    </div>
  )
}