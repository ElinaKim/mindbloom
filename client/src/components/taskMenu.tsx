import { useState } from "react"
import {MenuDrawer} from "./menuDrawer"
import MenuIcon from '../assets/icons/menu.svg'

export function TaskMenu() {
    const [isOpen, setOpen] = useState(false)
    const openDrawer = () => setOpen(true)
    const closeDrawer = () => setOpen(false)

    return(
    <>
    <div className='relative flex items-center'>
        {!isOpen && (
        <button onClick={openDrawer}
        className=''>
            <img className='m-4 w-[40px]'
            src={MenuIcon}
            alt='menu icon'
            />
        </button>)}
        <div>
            <div
            className={`absolute top-0 left-0 ${isOpen ? 'backdrop-blur-sm' : 'hidden'}`}>
            {isOpen && <MenuDrawer isOpen={isOpen} closeDrawer={closeDrawer}/>}
            </div>
            <div
            className={`ml-8 flex pointer-events-none`}>
                {/* <h1 className='text-4xl'>Hello</h1> */}
            </div>
        </div>
    </div>
    </>
    )
}