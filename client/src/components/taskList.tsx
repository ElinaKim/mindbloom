import { TaskCheckbox } from "./taskCheckbox"
import DeleteIcon from '../assets/icons/delete.svg'

interface Todo {
    id: number 
    name: string
    description: string
    date: string
    done: boolean

}

interface AppState {
    todos: Todo[];
    todoText: string;
}

const handleDelete  = () => { console.log('delete') }

export function TaskList() {
    return (
    <>
        <TaskCheckbox />
        <button 
            onClick={handleDelete} 
            className=''
        >
            <img 
                className='m-4 w-[25px]'
                src={DeleteIcon}
                alt='delete icon'
            />
        </button>
    </>
    )
}
