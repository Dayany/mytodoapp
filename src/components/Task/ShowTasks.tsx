import { MDBRow , MDBContainer} from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import TaskCard from './TaskCard'

const ShowTasks: React.FC = () => {
    const [tasks, setTasks] = useState([1,2,3,4]);

    return (
        <React.Fragment>
            <MDBContainer>
                {tasks.map((task) =>
                    <MDBRow>
                        <TaskCard />
                    </MDBRow>
                )
                } 
            </MDBContainer>
        </React.Fragment>       
    )
}

export default ShowTasks;