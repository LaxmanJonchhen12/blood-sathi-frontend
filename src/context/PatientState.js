import React, {useState } from "react";
import patientContext from "./patientContext";

const PatientState = (props) => {
    const [val, setVal] = useState(0);
    return(
            <patientContext.Provider value={[val, setVal]}>
                {props.children}
            </patientContext.Provider>
    )
}
export default PatientState;