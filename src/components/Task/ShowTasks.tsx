import { MDBRow } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';
import TaskCard from './TaskCard'
import TabTask from './TabTask'

const ShowTasks: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  useEffect(() => {
    async function fetchRecipes() {
      const response = await fetch(`${process.env.REACT_APP_API_SERVER}tasks`);
      const json = await response.json();
      setTasks(json);
    }
    fetchRecipes();
  }, []);

  return (
    <React.Fragment>
      <MDBRow style={{marginBottom: '20px'}}>
        <TabTask />
      </MDBRow>
      {
        tasks.map((task) =>
          <MDBRow>
            <TaskCard task={task}/>
          </MDBRow>
        )
      } 
    </React.Fragment>       
  )
}

export default ShowTasks;