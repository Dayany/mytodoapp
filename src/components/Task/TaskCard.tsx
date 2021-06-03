import React from 'react';
import { MDBCardHeader, MDBCard, MDBCardFooter,  MDBCardTitle, MDBBtn, MDBCardBody, MDBCardText } from 'mdb-react-ui-kit'
import { useDispatch } from 'react-redux';
interface Props {
  task: ITask
}

const TaskCard: React.FC<Props> = ({ task }) => {
  const borderStyle =  task.isDone ? "success" : "secondary";
  const buttonStyle =  !task.isDone ? "success" : "secondary";
  const dispatch = useDispatch();

  const deleteTask = async () => {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json "}
    }
    try{ 
      await fetch(`${process.env.REACT_APP_API_SERVER}tasks/${task.uuid}`, requestOptions)
      .then((response) => dispatch({type: "REMOVE_TASK", payload: task.uuid}))
    } catch(error) {
      throw new Error(error)
    }
  }
  const setTaskDone = async () => {
    task.isDone = !task.isDone;
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json " },
      body: JSON.stringify(task)
    }
    try{
      await fetch(`${process.env.REACT_APP_API_SERVER}tasks/${task.uuid}`, requestOptions)
      .then((response) =>{ dispatch({type: "MODIFY_TASK", payload: task})})
    } catch (error) {
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
          <MDBBtn color="danger"  onClick={() => deleteTask()}>DELETE</MDBBtn>
          <span>  </span>
          <MDBBtn color={buttonStyle}  onClick={() => setTaskDone()}>{task.isDone ? "Re-do" : "Done"}</MDBBtn>
        </MDBCardBody>
        <MDBCardFooter  border={ borderStyle } >Created:  {task.createdAt} | By: {task.user} </MDBCardFooter>
      </MDBCard>
    </React.Fragment>
  )
}

export default TaskCard;