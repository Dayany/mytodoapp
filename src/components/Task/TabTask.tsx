import React from 'react';
import { MDBTabs, MDBTabsItem, MDBTabsLink } from 'mdb-react-ui-kit';


const TabTask: React.FC = () => {

  return (
    <MDBTabs pills className='card-header-tabs'>
      <MDBTabsItem>
        <MDBTabsLink active>
          To do
        </MDBTabsLink>
      </MDBTabsItem>
      <MDBTabsItem>
        <MDBTabsLink >
          Done 
        </MDBTabsLink>
      </MDBTabsItem>
    </MDBTabs>
  )

}

export default TabTask;