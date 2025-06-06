import React from 'react'

const TaskListItem = ({data}) => {
  return (
    < div className='flex justify-between bg-gray-300 p-4 rounded-lg shadow-md mt-5 gap-5 screen'>
      <div className='bg-red-400 w-[45%] rounded-xl px-6 py-4'>
        <h1 className='text-3xl font-bold'>{data.taskCounts.newTask}</h1>
        <h2 className='text-2xl font-semibold'>new task</h2>
      </div>
      <div className='bg-blue-400 w-[45%] rounded-xl px-6 py-4'>
        <h1 className='text-3xl font-bold'>{data.taskCounts.completed}</h1>
        <h2 className='text-2xl font-semibold'>completed task</h2>
      </div>
      <div className='bg-yellow-400 w-[45%] rounded-xl px-6 py-4'>
        <h1 className='text-3xl font-bold'>{data.taskCounts.active}</h1>
        <h2 className='text-2xl font-semibold'>accepted task</h2>
      </div>
      <div className='bg-green-400 w-[45%] rounded-xl px-6 py-4'>
        <h1 className='text-3xl font-bold'>{data.taskCounts.failed}</h1>
        <h2 className='text-2xl font-semibold'>faild task</h2>
      </div>

    </div>
  )
}

export default TaskListItem
