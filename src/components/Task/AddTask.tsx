import React, { useState } from 'react';
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
    const [task, setTask] = useState("");
    const submitTask = (): void => {
        console.log(task)
    }


  return (
    <MDBRow className='d-flex justify-content-center'>
      <h1>Add Task</h1>
      <MDBInputGroup className='mb-3'>
        <MDBInputGroupElement type='text'  
            value={task}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
            (setTask(e.target.value))} />
        <MDBDropdown>
        <MDBDropdownToggle outline className='dropdown-toggle-split'>
            Task List<span> </span>
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
        <MDBBtn onClick={() => submitTask()} outline>Add Task</MDBBtn>
      </MDBInputGroup>
    </MDBRow>
  );
}


export default AddTask;