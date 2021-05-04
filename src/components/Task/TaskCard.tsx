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
            <MDBCardTitle>{task.title}</MDBCardTitle>
            <MDBCardText>{task.content}</MDBCardText>
            <MDBBtn color="danger"  href='#'>Delete</MDBBtn>
            <span>  </span>
            <MDBBtn color="success"  href='#'>Done</MDBBtn>
          </MDBCardBody>
        <MDBCardFooter  border={ borderStyle } >Created:  {task.createdAt}| By:{task.user} </MDBCardFooter>
      </MDBCard>
    </React.Fragment>
  )
}

export default TaskCard;