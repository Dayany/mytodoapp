import React from 'react';
import {MDBRow,
  MDBInputGroup,
  MDBInputGroupElement,
  MDBDropdown,
  MDBDropdownLink,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBBtn} from 'mdb-react-ui-kit'
const AddTask: React.FC = () =>{


  return (
    <MDBRow className='d-flex justify-content-center'>
      <h1>Add Task</h1>
      <MDBInputGroup className='mb-3'>
        <MDBInputGroupElement type='text' />
        <MDBBtn outline>Select List</MDBBtn>

        <MDBDropdown>
        <MDBDropdownToggle outline className='dropdown-toggle-split'>
            <span className='visually-hidden'>Toggle Dropdown</span>
        </MDBDropdownToggle>
        <MDBDropdownMenu>
            <MDBDropdownItem>
            <MDBDropdownLink>Personal</MDBDropdownLink>
            </MDBDropdownItem>
            <MDBDropdownItem>
            <MDBDropdownLink>Business</MDBDropdownLink>
            </MDBDropdownItem>
            <MDBDropdownItem>
            <MDBDropdownLink>Something else here</MDBDropdownLink>
            </MDBDropdownItem>
        </MDBDropdownMenu>
        </MDBDropdown>
      </MDBInputGroup>
    </MDBRow>
  );
}


export default AddTask;