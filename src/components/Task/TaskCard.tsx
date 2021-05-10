import React from 'react';
import { MDBCardHeader, MDBCard, MDBCardFooter,  MDBCardTitle, MDBBtn, MDBCardBody, MDBCardText } from 'mdb-react-ui-kit'
import { useDispatch } from 'react-redux';
interface Props {
  task: ITask
}

const TaskCard: React.FC<Props> = ({ task }) => {
  const borderStyle =  task.isDone ? "success" : "secondary";
  const dispatch = useDispatch();

  const deleteTask = async (uuid: string) => {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json "}
    }
    try{ 
      await fetch(`${process.env.REACT_APP_API_SERVER}tasks/${uuid}`, requestOptions)
      .then((response) => dispatch({type: "REMOVE_TASK", payload: uuid}))
    } catch(error) {
      throw new Error(error)
    }
  }
  return(
    <React.Fragment key={task.uuid}>
      <MDBCard shadow='0' border={ borderStyle } background='white' className='mb-3' >
        {task.priority.special ?
            <MDBCardHeader  background= "danger" className="text-white " order="danger">Urgent</MDBCardHeader>
          :
            null
        }
        <MDBCardBody  border={ borderStyle } >
          <MDBCardTitle>{task.title}</MDBCardTitle>
          <MDBCardText>{task.content}</MDBCardText>
          <MDBBtn color="primary"  href='#'>Expand Task</MDBBtn>
          <MDBBtn color="danger"  onClick={() => deleteTask(task.uuid)}>DELETE</MDBBtn>
          <span>  </span>
          <MDBBtn color="success"  href='#'>Done</MDBBtn>
        </MDBCardBody>
        <MDBCardFooter  border={ borderStyle } >Created:  {task.createdAt} | By: {task.user} </MDBCardFooter>
      </MDBCard>
    </React.Fragment>
  )
}

export default TaskCard;