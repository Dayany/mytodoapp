import { MDBContainer } from 'mdb-react-ui-kit';
import React from 'react';
import Main from './components/Main/Main';

const App: React.FC = () => {
  return (
    <MDBContainer className="text-center">    
      <Main/>
    </MDBContainer>
  );
}

export default App;
