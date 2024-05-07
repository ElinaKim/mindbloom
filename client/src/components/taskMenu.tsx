import { useState } from "react"
import { MenuDrawer } from "./menuDrawer"
import MenuIcon from '../assets/icons/menu.svg'

export function TaskMenu() {
    const [isOpen, setOpen] = useState(false)
    const openDrawer = () => setOpen(true)
    const closeDrawer = () => setOpen(false)

    return (
        <>
            <div className='relative flex self-start items-center'>
                {!isOpen && (
                    <button onClick={openDrawer}
                        className='ml-4 mt-4 md:m-8'>
                        <img className='w-[40px]'
                            src={MenuIcon}
                            alt='menu icon'
                        />
                    </button>)}
                <div>
                    <div
                        className={`absolute top-0 left-0 ${isOpen ? 'backdrop-blur-sm' : 'hidden'}`}>
                        {isOpen && <MenuDrawer isOpen={isOpen} closeDrawer={closeDrawer} />}
                    </div>
                    <div
                        className={`ml-8 flex pointer-events-none`}>
                    </div>
                </div>
            </div>
        </>
    )
}