export function TaskForm(closeModal) {
    return (
        <div className="flex justify-center items-center h-screen">
            <form className='bg-white flex flex-col mt-2 border-light-grey p-2 border-2 rounded'>
                <div className="flex justify-between p-4">
                    <h1 className='mt-2 text-xl md:text-4xl'>Task Details:</h1>
                    <button onClick={closeModal} className="text-grey focus:outline-none">&#10005;</button>
                </div>
                <input className='mt-2 py-4 px-1 border-light-grey border-2 rounded' type="text" placeholder='Add task name'></input>
                <textarea className='mt-2 py-4 px-1 border-light-grey border-2 rounded' placeholder='Add task description'></textarea>
                <label htmlFor="due_date">Due Date:</label>
                <input className='mt-2 py-4 px-1 border-light-grey border-2 rounded' type="date" id="due_date" name="due_date" />
                <div className='flex justify-evenly'>
                    <button className='my-4 py-1 px-4 md:px-10 rounded-md text-white bg-pink'>Delete</button>
                    <button className='my-4 py-1 px-4 md:px-10 rounded-md text-white bg-blue' type='submit'>Save Changes</button>
                </div>
            </form>
        </div>
    )
}