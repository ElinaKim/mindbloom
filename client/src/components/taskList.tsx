import { TaskCheckbox } from "./taskCheckbox"
import DeleteIcon from '../assets/icons/delete.svg'


const handleDelete = () => { console.log('delete') }


export function TaskList() {
    const handleClick = () => {
        handleDelete();
    }
    return (
        <>
            <div className='flex items-center bg-white pt-4 border-light-grey border-b-2'>
                <TaskCheckbox />
                <p className='place-self-center p-4 w-[100%]'>Do something</p>
                <button
                    onClick={handleClick}
                    className='self-end'
                >
                    <img
                        className='my-4 w-[25px]'
                        src={DeleteIcon}
                        alt='delete icon'
                    />
                </button>
            </div>
        </>
    )
}
