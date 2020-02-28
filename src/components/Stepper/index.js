import React from "react";
import "./style.scss";
const Stepper = React.memo(({ children, handleStepChange, currentActive }) => {
  const updateChildrenWithProps = children.map((child, i) => {
    return React.cloneElement(child, {
      key: i,
      handleStepChange,
      currentActive
    });
  });
  return <div className="stepper">{updateChildrenWithProps}</div>;
});
export default Stepper;
