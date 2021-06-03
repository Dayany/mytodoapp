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

interface IProps {
  task: ITask;
  isOpen: boolean;
  toggleShow: () => void
}

const ModalTask: ComponentType<IProps> = ({ task, isOpen, toggleShow }) => {

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
