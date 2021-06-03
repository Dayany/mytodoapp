import React, { useState } from 'react';
import {MDBRow,
  MDBInput,
  MDBContainer,
  MDBBtn,
  MDBCheckbox
  } from 'mdb-react-ui-kit'
import { generateUuid } from "../Helpers/Helper";

import { useDispatch } from 'react-redux';

const AddTask: React.FC = () =>{
  const dispatch = useDispatch();

  const AddTask = (task: ITask) => {
    dispatch({type: "ADD_TASK", payload: task});
  }
  const uuid: string = generateUuid();
  const [content, setContent] = useState(""); 
  const [title, setTitle] = useState("");
  const user: string = "guest";
  const [isUrgent, setIsUrgent] = useState(false);
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
    special: isUrgent 
  };

  const clearForm = () => {
    setTitle("");
    setContent("");
    setIsUrgent(false);
  }
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
        .then((data) => {
          AddTask(data); 
          clearForm()
        })
    
    } catch (error) {
      throw new Error(error);
    }

  };


  return (
    <MDBContainer>
      <MDBRow className='d-flex justify-content-center'>
            <div style={{margin: "5px"}}>
              <MDBInput style={{margin: "5px"}} label='Title' value={title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>{
                  setTitle(e.target.value)
                }} />
            </div>
            
            <div style={{margin: "5px"}}>
              <MDBInput textarea rows="3" label="Your message" value={content} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                (setContent(e.target.value))} />
            </div>

            <div style={{margin: "5px"}}>
              <MDBCheckbox name='inlineCheck' id='inlineCheckbox1' value='isUrgent' label='Is it urgent?' inline onClick={() => setIsUrgent(!isUrgent)} />
            </div>

            <div style={{margin: "5px"}}>
              <MDBBtn onClick={() => submitTask()} outline>Add Task</MDBBtn>
            </div>
      </MDBRow>
    </MDBContainer>
  );
}


export default AddTask;