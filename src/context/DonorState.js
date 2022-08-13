import React, {useState } from "react";
import donorContext from "./donorContext";

const DonorState = (props) => {
    const [val, setVal] = useState(0);
    return(
            <donorContext.Provider value={[val, setVal]}>
                {props.children}
            </donorContext.Provider>
    )
}
export default DonorState;