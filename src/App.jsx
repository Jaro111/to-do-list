import { useState } from 'react'
import "./App.css"
import ListSection from './ListSection'

// To add task to the list we need to type it first and press enter or click "add" button. 
// To remove the task press "X" button 
// To mark task as done press "check" button

function App() {
  // "Tak which will be added to list"
  const [task, setTask] = useState("")
  // List
  const [toDo, setToDo] = useState([])
 

  // Function to add task to the list. Takes parameter value which will be taken fro input
const addToList = (value) => {
  let newArray = []
  newArray = [...toDo]
  newArray.push(value)
  setToDo(newArray)
  setTask("")
}

// Function to set input value as a task
  const handleChange = (event) => {
      setTask(event.target.value)
  }

  // Function to remove selected task fron the list
const handleRemove = (index) => { 
    let remArray = [...toDo]
    remArray.splice(index, 1)
    setToDo(remArray)
  }

// Event listener for the keyboard. So when enter will pe pressed will do the same as mouse click on the "ADD" button 
const handleKeyPress = (event) => {
  const key = event.key
  if (key === "Enter") {
  addToList(task)
  }
}


  return (
    <div className="backgroundContainer">
      <div className="fullContaier">

          <div className="inputContainer">
            {/* Function onBlur will focus mouse cursor on the input. So even if we will click outside of the input we can still type on the keyboard and add task to 
            the list by pressing enter without using the mouse to click on the input */}
            <input className="inputSpace" value={task}  onBlur={e => e.target.focus()} onChange={handleChange}
             onKeyUp={(event) => handleKeyPress(event)}></input>
            {/* Button with function to add to the list */}
            <button className="addButton" onClick={() => addToList(task) } >ADD</button>
          </div>

          <div className="listContainer">
            <ul>
             {
              // toDo list Iteration by index and task
              toDo.map((task, index) => {
                return (           
                <ListSection key={index} listContent={task} 
                removeTask = {() => handleRemove(index)}
                >

                </ListSection>
                )    
              }
            )
          }
            </ul>
          </div>
              
      </div>
      
    </div>
  )

}

export default App
