import { MDBContainer } from 'mdb-react-ui-kit';
import React from 'react';
import AddTask from '../Task/AddTask'
import ShowTasks from '../Task/ShowTasks';

const Main: React.FC = () => {
  return (
    <MDBContainer className="border border-info">
      <div style={{margin: '10px'}}>
        <AddTask />
        <ShowTasks />
      </div>
    </MDBContainer>
  )
}

export default Main;