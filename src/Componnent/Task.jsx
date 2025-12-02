import React from 'react';

const Task = ({item}) => {
    return (
        <div className='space-y-5 shadow-xl p-5'>
            <h1 className='text-xl font-semibold mt-3'>{item.title}</h1>
            <button className='text-white text-xl bg-green-500 w-full py-2 rounded-xl'>button</button>
        </div>
    );
};

export default Task;