import { MDBRow } from 'mdb-react-ui-kit';
import React, { useEffect } from 'react';
import TaskCard from './TaskCard'
import TabTask from './TabTask'
import { useDispatch, useSelector } from 'react-redux';
import { TaskState } from '../../Redux/reducers/TasksReducer';

const ShowTasks: React.FC = () => {

  const tasks: ITask[] = useSelector<TaskState, TaskState['tasks']> ((state: TaskState) => state.tasks)
  const displayDoneTasks: boolean = useSelector<TaskState, TaskState['displayDoneTasks']> ((state: TaskState) => state.displayDoneTasks)
  const dispatch = useDispatch();

 

  useEffect(() => {
    const addInitialTasks = (task: ITask[]) => {
      dispatch({type: "ADD_INITIAL_TASKS", payload: task});
    }
    async function fetchRecipes() {
      const response = await fetch(`${process.env.REACT_APP_API_SERVER}tasks`);
      const json: ITask[] = await response.json();
      addInitialTasks(json);
    }
    fetchRecipes();
  }, [dispatch]);
  const filteredTasks: ITask[] = tasks?.filter((task: ITask) => {return task.isDone === displayDoneTasks });


  const orderedTasksUrgent: ITask[] = filteredTasks.filter((task: ITask) => {return task.priority.special === true})
        .sort((a, b) => {return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()})
  
  const orderedTasksNonUrgent: ITask[] = filteredTasks.filter((task: ITask) => {return task.priority.special === false})
        .sort((a, b) => {return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()})


  const displayFilteredCardsUrgent =
      orderedTasksUrgent?.map((task) =>
        <MDBRow key={task.uuid}>
          <TaskCard task={task}/>
        </MDBRow>
      )

  const displayFilteredCards =
      orderedTasksNonUrgent?.map((task) =>
        <MDBRow key={task.uuid}>
          <TaskCard task={task}/>
        </MDBRow>
      )

  return (
    <React.Fragment>
      <MDBRow style={{marginBottom: '20px'}}>
        <TabTask />
      </MDBRow>
	  {displayFilteredCardsUrgent}
      {displayFilteredCards} 
    </React.Fragment>       
  )
}

export default ShowTasks;