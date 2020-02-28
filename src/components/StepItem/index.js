import React, { useEffect, useState } from "react";
import "./style.scss";
function Step({ title, order, handleStepChange, activeKey, currentActive }) {
  const [clssName, setClssName] = useState("");
  useEffect(() => {
    if (currentActive < activeKey) {
      setClssName("");
    } else {
      setClssName("visited");
    }
    if (currentActive === activeKey) {
      setClssName("activated");
    }
  }, [currentActive, activeKey]);
  return (
    <div
      className={"step-item " + clssName}
      onClick={() => handleStepChange(activeKey)}
    >
      <div className="step-item__before"></div>
      <div className="step-item__after"></div>
      <span className="step-item__order">{order}</span>
      <div className="step-item__title">{title}</div>
    </div>
  );
}
export default Step;
