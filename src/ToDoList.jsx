import React from "react";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Tooltip from '@material-ui/core/Tooltip';


const ToDoList = (props) => {
 
    return(
        <>
         <div className="todo_style">
         <Tooltip title="cancel">
         <HighlightOffIcon className="btn_red"
           onClick= {()=> {
             props.onSelect(props.id);
           }}></HighlightOffIcon>
           </Tooltip>
         <li>{props.text}</li>
         
         </div>
        </>
    );
}
 
export default ToDoList;