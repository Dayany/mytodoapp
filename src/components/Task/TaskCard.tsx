import React, { useState } from 'react';
import { MDBCardHeader, MDBCard, MDBCardFooter,  MDBCardTitle, MDBBtn, MDBCardBody, MDBCardText } from 'mdb-react-ui-kit'
import { useDispatch } from 'react-redux';
import ModalTask from './ModalTask';
interface Props {
  task: ITask
}

const TaskCard: React.FC<Props> = ({ task }) => {
  const borderStyle =  task.isDone ? "success" : "secondary";
  const buttonStyle =  !task.isDone ? "success" : "secondary";
  const [isOpen, setIsOpen] = useState(false);
  const toggleShow = () => {
    setIsOpen(!isOpen);
  }
  const dispatch = useDispatch();


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
          <MDBBtn color="primary"  onClick={() => toggleShow() }>Expand Task</MDBBtn>
          <ModalTask taskParent={task} isOpen={isOpen} toggleShow={toggleShow} />
          <span>  </span>
          <MDBBtn color={buttonStyle}  onClick={() => setTaskDone()}>{task.isDone ? "Re-do" : "Done"}</MDBBtn>
        </MDBCardBody>
        <MDBCardFooter  border={ borderStyle } >Created:  {task.createdAt} | By: {task.user} </MDBCardFooter>
      </MDBCard>
    </React.Fragment>
  )
}

export default TaskCard;