import React, { useState } from "react";
import "./Todo.css"
import Todolists from "./Todolist";

const Todo = () => {

    const [inputList, setInputList] = useState("hello");
    const [items, setItems] = useState([]);

   const itemEvent = (event) => {
    setInputList(event.target.value);
   }
   const listofitems = () => {
    setItems((olditems) => {
        return [...olditems, inputList]
    });
    setInputList("");
   }

   const deletitems =(id) => {
    console.log("delet");

    setItems((olditems) => {
   return olditems.filter((arrElement, index) => {
       return index !== id;
   })
    })
}

    return (

        <>
        <div className="main-div">
            <div className="center-div">
            <h1>Todo List</h1>
            <input type="text" value={inputList} placeholder="Add a items" onChange={itemEvent}/>

            <button onClick={listofitems}>ADD</button>
            
            <ol>
                {/* <li>{inputList}</li> */}

              {  items.map((itemvalue, index) => {
                 return <Todolists key = {index} id= {index} itemss = {itemvalue} onSelect = {deletitems}  />
                })}

            </ol>
            </div>
        </div>
        
        </>
    )
}
export default Todo;