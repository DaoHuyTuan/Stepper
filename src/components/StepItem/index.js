import React from "react";
import "./style.scss";
function Step({ title, order, clssName, handleStepChange }) {
    const classNames = clssName ? clssName : "";
    return (
    <div className={"step-item " + classNames} onClick={handleStepChange}>
        <div className="step-item__before"></div>
        <div className="step-item__after"></div>
        <span className="step-item__order">{order}</span>
        <div className="step-item__title">{title}</div>
    </div>
    )
}
export default Step;