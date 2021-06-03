import { MDBRow } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';
import TaskCard from './TaskCard'
import TabTask from './TabTask'
import { useDispatch, useSelector } from 'react-redux';
import { TaskState } from '../../Redux/reducers/TasksReducer';

const ShowTasks: React.FC = () => {

  const tasks: ITask[] = useSelector<TaskState, TaskState['tasks']> ((state: TaskState) => state.tasks)
  const displayDoneTasks: boolean = useSelector<TaskState, TaskState['displayDoneTasks']> ((state: TaskState) => state.displayDoneTasks)
  const dispatch = useDispatch();

  const addInitialTasks = (task: ITask[]) => {
    dispatch({type: "ADD_INITIAL_TASKS", payload: task});
  }

  useEffect(() => {
    async function fetchRecipes() {
      const response = await fetch(`${process.env.REACT_APP_API_SERVER}tasks`);
      const json: ITask[] = await response.json();
      addInitialTasks(json);
    }
    fetchRecipes();
  }, []);
  const filteredTasks: ITask[] = tasks?.filter((task: ITask) => {return task.isDone === displayDoneTasks });
  
  const orderedTasks: ITask[] = filteredTasks
        .sort( function(a, b) { return (a.priority.special === b.priority.special) ?  1 : -1})
        .sort((a, b) => {return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()});

  console.log(orderedTasks)
  const displayFilteredCards =
      orderedTasks?.map((task) =>
        <MDBRow key={task.uuid}>
          <TaskCard task={task}/>
        </MDBRow>
      )

  return (
    <React.Fragment>
      <MDBRow style={{marginBottom: '20px'}}>
        <TabTask />
      </MDBRow>
      {displayFilteredCards} 
    </React.Fragment>       
  )
}

export default ShowTasks;