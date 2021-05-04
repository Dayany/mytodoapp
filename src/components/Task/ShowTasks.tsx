import { MDBRow } from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import TaskCard from './TaskCard'
import TabTask from './TabTask'

const ShowTasks: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([{ isDone: true },{ isDone: false },{ isDone: false } ,{ isDone: false }]);

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