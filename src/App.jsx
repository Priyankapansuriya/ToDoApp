import React, { useState } from "react";
import ToDoList from "./ToDoList.jsx";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import "../node_modules/bootstrap/dist/css/C:\Users\priya\react\framework\node_modules\bootstrap\dist\css\bootstrap.min.css";


const App = () => {

  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);
  
  const listOfItems = () => {
      setItems((oldItems) => {
        return [...oldItems,inputList]
      });
      setInputList("");
  };
 
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const deleteItem = (id) => {
    console.log("deleted");

    setItems((oldItems)=> {
        return oldItems.filter((arrElem,index) => {
           return index !== id;
        })
    });
  }

 return (
    <>
        <div className="main_div">
         <div className="center_div">
            <br />
            <h1> ToDo List </h1>
            <br />
            <input type="text" placeholder="Add a Items" onChange={itemEvent}
                value={inputList}
            />
            <Tooltip title="Add">
            <Fab size="small" className="btn_green" onClick={listOfItems}> <AddIcon /> </Fab>
            </Tooltip>
            <ol>
                {/*<li>{inputList}</li>*/}
                {Items.map( (itemval , index) => {
                   return <ToDoList 
                   key={index} 
                   id={index} 
                   text={itemval}
                   onSelect = {deleteItem}
                 />;
                })}
            </ol>
         </div>
        </div>
    </>
 

 );
};

export default App;