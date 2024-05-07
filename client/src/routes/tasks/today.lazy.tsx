import { useState } from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';
import { TaskMenu } from '../../components/taskMenu';
import { TaskList } from '../../components/taskList';
import { TaskForm } from '../../components/taskForm';

export const Route = createLazyFileRoute('/tasks/today')({
  component: Today,
});

const currentDate = new Date().toDateString();

function Today() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className='flex content-center'>
        <div className='flex-shrink-0'>
          <TaskMenu />
        </div>
        <div className='w-[80vw] flex flex-col justify-between'>
          <h1 className='mt-4 md:mt-8 text-xl md:text-4xl'>Hello, userName</h1>
          <h2 className='text-base mt-2 pb-2 md:text-xl md:mt-4 font-kumbh-bold'>Today <span className='bg-light-grey p-1 rounded'>{currentDate}</span></h2>
          <button className='my-4 py-2 px-12 rounded-md text-white bg-blue' onClick={openModal}>
            Add New Task
          </button>
          <div className=''>
            <div className='md:mr-4'>
              <TaskList />
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed justify-center items-center top-0 left-0 w-[100%] h-full bg-black bg-opacity-50">
          <div className="">
            <TaskForm closeModal={closeModal} />
          </div>
        </div>
      )}
    </>
  );
}

export default Today;