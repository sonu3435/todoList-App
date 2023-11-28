import React from "react";


const ToDoLists = (props) => {
    return(
        <>
        <div className="todo_style">
        <i className="fa fa-close"
           onClick={() => {
            props.onSelect(props.id);
           }}
        />
         <li key={props.key}>{props.text}</li>
        </div>
        </>
    )
}

export default ToDoLists;