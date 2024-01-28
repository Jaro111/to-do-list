import { useState } from 'react'
import { useEffect } from 'react';
import "./App.css"
import ListSection from './ListSection'
let newTask = '--------'

function App() {
  const [task, setTask] = useState("")
  const [toDo, setToDo] = useState([])
  const [btnStatus, setBtnStatus] = useState(false)
  const [noStyle, setNoStyle] = useState({textDecoration: 'none'});

// const textDecotation = {
//  setNoStyle({text-decoration: 'line-through'})
// }

const addToList = (value) => {
  let newArray = []
  newArray = [...toDo]
  newArray.push(value)
  setToDo(newArray)
  setTask("")
}

  const handleChange = (event) => {
      setTask(event.target.value)
  }

const handleRemove = (index) => { 
    let remArray = [...toDo]
    remArray.splice(index, 1)
    setToDo(remArray)
  }


const handleKeyPress = (event) => {
  const key = event.key
  if (key === "Enter") {
  addToList(task)
  }
}

const ChangeBtnStatus = (index, task) => {
    let newArray = []
    newArray = [...toDo]
    console.log(toDo[index])
    if (!newTask.includes('DONE')) {
    newTask = `${index, task} *** DONE ***`
    // newTask[index] = setNoStyle({textDecoration: 'line-through'})

    }
    newArray.splice(index, 1, newTask)
    setToDo(newArray)
}

// const ChangeBtnStatus = (index) => {
//   setBtnStatus(!btnStatus)
//   console.log(btnStatus)
//   // toDo[index] = setNoStyle({textDecoration: 'line-through'})
//     // toDo[index] = setNoStyle({textDecoration: 'line-through'})
// }



  return (
    <div className="backgroundContainer">
      <div className="fullContaier">

          <div className="inputContainer">
            <input className="inputSpace" value={task}  onBlur={e => e.target.focus()} onChange={handleChange}
             onKeyUp={(event) => handleKeyPress(event)}></input>

            <button className="addButton" onClick={() => addToList(task) } >ADD</button>
          </div>

          <div className="listContainer">
            <ul>
             {
              toDo.map((task, index) => {
                return (
                
                <ListSection key={index} listContent={task} 
                // textStyle = {{textDecoration: 'line-through'}}
                removeTask = {() => handleRemove(index)}
                textStyle = {noStyle}
                click = {() => ChangeBtnStatus(index, task)}

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
