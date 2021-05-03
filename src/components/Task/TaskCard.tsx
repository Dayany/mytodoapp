import React from 'react';
import { MDBCardHeader, MDBCard, MDBCardFooter,  MDBCardTitle, MDBBtn, MDBCardBody, MDBCardText } from 'mdb-react-ui-kit'
interface Props {

}

const TaskCard: React.FC<Props> = () => {
    return(
        <React.Fragment>
            <MDBCard shadow='0' border='primary' background='white' className='mb-3' >
                <MDBCardHeader>Urgent</MDBCardHeader>
                <MDBCardBody>
                    <MDBCardTitle>Task title</MDBCardTitle>
                    <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
                    <MDBBtn color="danger"  href='#'>Delete</MDBBtn>
                    <span>  </span>
                    <MDBBtn color="success"  href='#'>Done</MDBBtn>
                </MDBCardBody>
                <MDBCardFooter>Created:  | By: </MDBCardFooter>
            </MDBCard>
        </React.Fragment>
    )
}

export default TaskCard;