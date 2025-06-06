import React from 'react'

const CompleteTask = ({data}) => {

  return (
          <div className="bg-amber-400 shrink-0 h-full w-[300px] rounded-3xl p-2   ">
        <div className="flex justify-between items-center ">
          <h2 className=" bg-amber-600 px-2 py-1 rounded text-sm">{data.category}</h2>
          <h3 className="text-sm">{data.taskDate}</h3>
        </div>
        <h1 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h1>
        <p className="text-sm mt-2">
         {data.taskDescription}
        </p>
        <div className="flex justify-center mt-5  h-12 items-center">
          <button className="bg-green-500 px-2 py-1 text-sm rounded-full w-full">completed</button>
         
        </div>
      </div>
    
  )
}

export default CompleteTask
