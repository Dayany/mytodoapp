import React from 'react';
import { MDBCardHeader, MDBCard, MDBCardFooter,  MDBCardTitle, MDBBtn, MDBCardBody, MDBCardText } from 'mdb-react-ui-kit'
interface Props {
  task: ITask
}

const TaskCard: React.FC<Props> = ({ task }) => {
  const borderStyle =  task.isDone ? "success" : "secondary";
  return(
    <React.Fragment>
      <MDBCard shadow='0' border={ borderStyle } background='white' className='mb-3' >
        <MDBCardHeader  border={ borderStyle } >Urgent</MDBCardHeader>
          <MDBCardBody  border={ borderStyle } >
            <MDBCardTitle>Task title</MDBCardTitle>
            <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
            <MDBBtn color="danger"  href='#'>Delete</MDBBtn>
            <span>  </span>
            <MDBBtn color="success"  href='#'>Done</MDBBtn>
          </MDBCardBody>
        <MDBCardFooter  border={ borderStyle } >Created:  | By: </MDBCardFooter>
      </MDBCard>
    </React.Fragment>
  )
}

export default TaskCard;