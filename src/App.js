import React, { useState } from "react";
import Stepper from "./components/Stepper";
import Step from "./components/StepItem";
const App = React.memo(() => {
  const [currentStep, setCurrentStep] = useState(1);
  const handleStepChange = id => {
    setCurrentStep(id);
  };
  return (
    <div className="App">
      <Stepper handleStepChange={handleStepChange} currentActive={currentStep}>
        <Step title="Supplier" order={1} activeKey={1} />
        <Step title="Basic Infomation" order={2} activeKey={2} />
        <Step title="Language" order={3} activeKey={3} />
        <Step title="Lorem ispsum" order={4} activeKey={4} />
        <Step title="Some dumb text" order={5} activeKey={5} />
        <Step title="Vertical Stepper" order={6} activeKey={6} />
      </Stepper>
    </div>
  );
});

export default App;
