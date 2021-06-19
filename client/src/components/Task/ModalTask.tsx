import { ComponentType, useState } from "react";
import {
  MDBInput,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import { useDispatch } from "react-redux";

interface IProps {
  taskParent: ITask;
  isOpen: boolean;
  toggleShow: () => void
}

const ModalTask: ComponentType<IProps> = ({ taskParent, isOpen, toggleShow }) => {
  const dispatch = useDispatch();
  const [task, setTask] = useState(taskParent);

  const deleteTask = async () => {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json "}
    }
    try{ 
      await fetch(`${process.env.REACT_APP_API_SERVER}tasks/${task.uuid}`, requestOptions)
      .then((response) => {
        dispatch({type: "REMOVE_TASK", payload: task.uuid}); 
        toggleShow();
      })
    } catch(error) {
      throw new Error(error)
    }
  }

  const saveChanges = async () => {
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

  return (
    <MDBModal closeOnEsc={false} show={isOpen}>
      <MDBModalDialog>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>
              <MDBInput style={{margin: "5px"}} label='Title' value={task.title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>{
                  setTask(prevState => {
                    let currTask = Object.assign({}, prevState);
                    currTask.title = e.target.value;                
                    return currTask;
                  });
                }} />
            </MDBModalTitle>
            <MDBBtn
              className="btn-close"
              color="none"
              onClick={toggleShow}
            ></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody>
            <MDBInput textarea rows="3" label="Description" value={task.content} 
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setTask(prevState => {
                let currTask = Object.assign({}, prevState);
                currTask.content= e.target.value;
                return currTask;
              });
            }} /> 
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="danger"  onClick={() => deleteTask()}>DELETE</MDBBtn>
            <MDBBtn color="secondary" onClick={toggleShow}>
              Close
            </MDBBtn>
            <MDBBtn onClick={() => saveChanges()}>Save changes</MDBBtn>
          </MDBModalFooter>
            </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
};

export default ModalTask;
