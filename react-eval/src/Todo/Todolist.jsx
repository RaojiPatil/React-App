import React from "react";

const Todolists = (props) => {

    return (
 <div>
     <span className="itemslist">
     <li>{props.itemss}</li>
        <button onClick={() => {
            props.onSelect(props.id);
        }}>Delete</button>
     </span>
 </div>
    )
}
export default Todolists;