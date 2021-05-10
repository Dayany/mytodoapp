import React, { useState } from 'react';
import {MDBRow,
  MDBInputGroup,
  MDBInputGroupElement,
  MDBDropdown,
  MDBDropdownLink,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBBtn
  } from 'mdb-react-ui-kit'
import { generateUuid } from "../Helpers/Helper";

import { TaskState } from '../../Redux/reducers/TasksReducer'
import { useDispatch, useSelector } from 'react-redux';
// import { addTask } from '../../Redux/Actions/TasksActions';

const AddTask: React.FC = () =>{
  const dispatch = useDispatch();

  const AddTask = (task: ITask) => {
    dispatch({type: "ADD_TASK", payload: task});
  }
  const uuid: string = generateUuid();
  const [content, setContent] = useState(""); 
  const [title, setTitle] = useState("");
  const [user, setUser] = useState("guest");
  const isDone: boolean = false;
  const today: Date = new Date();
  const createdAt: string =
    today.getFullYear() +
    "-" +
    (today.getMonth() + 1 < 10 ? "0" : "") +
    (today.getMonth() + 1) +
    "-" +
    today.getDate();
  
  const priority: IPriority = { 
    level:  1, 
    special: true 
  };

  const submitTask = async (): Promise<void> => {
    const data: ITask = {
      uuid,
      title,
      user,
      isDone,
      createdAt,
      content,
      priority,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    try {
      await fetch(`${process.env.REACT_APP_API_SERVER}tasks`, requestOptions)
        .then((response) => response.json())
        .then((data) => AddTask(data))
    
    } catch (error) {
      throw new Error(error);
    }

  };


  return (
    <MDBRow className='d-flex justify-content-center'>
      <MDBInputGroup className='mb-3'>
        <MDBInputGroupElement type='text'  
            value={content}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
            (setContent(e.target.value))} />
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