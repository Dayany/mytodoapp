import React, { useState } from 'react';
import { MDBTabs, MDBTabsItem, MDBTabsLink } from 'mdb-react-ui-kit';
import { useDispatch } from 'react-redux';


const TabTask: React.FC = () => {
  const [fillActive, setFillActive] = useState('tab1');
  const dispatch = useDispatch();

  const changeCategories = (isDone: boolean) => {
    dispatch({type: "CHANGE_CATEGORY", payload: isDone});
  }
  const handleFillClick = (value: string) => {
    if (value === fillActive) {
      return;
    }

    let isDone: boolean;
    if(value === 'tab1'){
      isDone = false;
    }else{
      isDone = true;
    }

    changeCategories(isDone);
    
    setFillActive(value);
  };

  return (
    <MDBTabs pills className='card-header-tabs'>
      <MDBTabsItem>
        <MDBTabsLink className={ fillActive === 'tab1' ? "bg-secondary" : "" } onClick={() => handleFillClick('tab1')} active={fillActive === 'tab1'}>
          To do
        </MDBTabsLink>
      </MDBTabsItem>
      <MDBTabsItem>
        <MDBTabsLink className={ fillActive === 'tab2' ? "bg-success" : "" } onClick={() => handleFillClick('tab2')} active={fillActive === 'tab2'}>
          Done 
        </MDBTabsLink>
      </MDBTabsItem>
    </MDBTabs>
  )

}

export default TabTask;