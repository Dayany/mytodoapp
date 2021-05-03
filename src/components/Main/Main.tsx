import React from 'react';
import AddTask from '../Task/AddTask'
import ShowTasks from '../Task/ShowTasks';

const Main: React.FC = () => {
    return (
        <>
        <AddTask />
        <ShowTasks />
        </>
    )
}

export default Main;