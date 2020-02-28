import React, { useState } from 'react';
import "./styles.scss"
import Stepper from './components/Stepper';
import { stepList }  from "./stepList";
import Step from './components/StepItem';
const App = React.memo(props => {
  const [listStep, setListStep] = useState(stepList);
  const handleStepChange = id => {
     const cloneListStep = JSON.parse(JSON.stringify(stepList));
     cloneListStep.map(item => {
  
        if(item.id === id) {
          item.clssName = "activated";
        }
        else {
          item.clssName = "";
        }
        if(item.id < id) {
          item.clssName = "visited";
        }

        return item
     })
     setListStep(cloneListStep)
  }
  return (
    <div className="App">
      <Stepper>
         {listStep.map(item => {
           return <Step title={item.label} order={item.order} clssName={item.clssName} key={item.id} handleStepChange={() => handleStepChange(item.id)}/>
         })}
      </Stepper>
    </div>
  );
})

export default App;
