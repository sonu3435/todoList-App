import React , {useState} from 'react'
import ToDoLists from './ToDoLists';

const App = () =>{

  const [inputList, setInputList] = useState("")
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
       setInputList(event.target.value)
  };
  const listOfItems = () => {
    setItems( (oldItems) =>{
      return [...oldItems, inputList]
    });
    setInputList("");
  }

  const deleteItems = (id) =>{
    console.log("deleted")
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      })
    })
 }

  return(
    <>

    <div className='main_div'>
      <div className='centre_div'>
        <br/>
        <h1>ToDo List</h1>
        <br/>
        <input type='text'
         value={inputList}
         placeholder='Add a Items' onChange={itemEvent}/>
        <button onClick={listOfItems}>+</button>

        <ol>
          
          {Items.map((itemval,index) => {
            return(<ToDoLists 
            text = {itemval}
            key = {index}
            id = {index}
            onSelect = {deleteItems}
            />)
          })}

        </ol>
      </div>
    </div>
    </>
  )
}

export default App;