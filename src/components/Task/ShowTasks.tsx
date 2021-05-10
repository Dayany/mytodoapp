import { MDBRow } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';
import TaskCard from './TaskCard'
import TabTask from './TabTask'
import { useDispatch, useSelector } from 'react-redux';
import { TaskState } from '../../Redux/reducers/TasksReducer';

const ShowTasks: React.FC = () => {

  const tasks = useSelector<TaskState, TaskState['tasks']> ((state: TaskState) => state.tasks)

  const dispatch = useDispatch();

  const addInitialTasks = (task: ITask[]) => {
    dispatch({type: "ADD_INITIAL_TASKS", payload: task});
  }

  useEffect(() => {
    async function fetchRecipes() {
      const response = await fetch(`${process.env.REACT_APP_API_SERVER}tasks`);
      const json = await response.json();
      addInitialTasks(json);
    }
    fetchRecipes();
  }, []);

  return (
    <React.Fragment>
      <MDBRow style={{marginBottom: '20px'}}>
        <TabTask />
      </MDBRow>
      {
        tasks?.map((task) =>
          <MDBRow key={task.uuid}>
            <TaskCard task={task}/>
          </MDBRow>
        )
      } 
    </React.Fragment>       
  )
}

export default ShowTasks;