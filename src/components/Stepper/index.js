import React from "react";
import "./style.scss";
function Stepper({ children, handleChangeStep }) {
    return (
    <div className="stepper" onClick={handleChangeStep}>{children}</div>
    )
}
export default Stepper;