import { ComponentType } from "react";
import {
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
  task: ITask;
  isOpen: boolean;
  toggleShow: () => void
}

const ModalTask: ComponentType<IProps> = ({ task, isOpen, toggleShow }) => {
  const dispatch = useDispatch();
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
  return (
    <MDBModal show={isOpen}>
      <MDBModalDialog>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>{task.title}</MDBModalTitle>
            <MDBBtn
              className="btn-close"
              color="none"
              onClick={toggleShow}
            ></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody>{task.content}</MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="danger"  onClick={() => deleteTask()}>DELETE</MDBBtn>
            <MDBBtn color="secondary" onClick={toggleShow}>
              Close
            </MDBBtn>
            <MDBBtn>Save changes</MDBBtn>
          </MDBModalFooter>
            </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
};

export default ModalTask;
