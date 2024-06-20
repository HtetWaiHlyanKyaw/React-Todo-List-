import React, { useState } from 'react'

const Edit = ({editTodo, task}) => {
    const [value, setValue] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        editTodo(value, task.id);
        setValue('');
    }
  return (
    <form className='font-primary w-full' onSubmit={handleSubmit}>
        <input type="text" className='outline-none bg-transparent border border-gray-500 p-4 w-[380px] text-white mb-2
        rounded placeholder:text-gray-300' placeholder='Update Task' onChange={(e) => setValue(e.target.value)} value={value} />
        <button className='bg-gray-500 border-none p-4 text-white cursor-pointer rounded ml-2'>Update Task</button>
    </form>
  )
}

export default Edit