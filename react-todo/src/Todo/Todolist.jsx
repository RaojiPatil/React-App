import React from "react";

const Todolists = (props) => {

    return (
 <div>
     <li>{props.itemss}</li>
     <button onClick={() => {
      props.onSelect(props.id);
        }}>Delete</button>
 </div>
    )
}
export default Todolists;