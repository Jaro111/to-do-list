import { useState } from 'react'
import { useEffect } from 'react';
import "./App.css"
import ListSection from './ListSection'
let nextId = 0

function App() {
  const [task, setTask] = useState("")
  const [toDo, setToDo] = useState([])
  const [btnStatus, setBtnStatus] = useState(false)

const addToList = (value) => {
  setToDo([...toDo, 
    {id: nextId += 1,
     task: value}
    ])
    setTask("")
   
}

  const handleChange = (event) => {
      setTask(event.target.value)
  }

const handleRemove = (id) => {
    const newToDo = toDo.filter(toDo => toDo.id !== id);
    setToDo(newToDo);
  }
const ChangeBtnStatus = (doneIndex) => {
  setBtnStatus(!btnStatus)
}

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
            <input className="inputSpace" value={task} onBlur={e => e.target.focus()} onChange={handleChange}
             onKeyUp={(event) => handleKeyPress(event)}></input>

            <button className="addButton" onClick={() => addToList(task) } >ADD</button>
          </div>

          <div className="listContainer">
            <ul>
              {
                toDo.map((toDo, index) => {
                  return (
                  <ListSection key = {toDo.id} 
                  listContent={toDo.task}
                  doneIndex = {index + 0.1}
                  cancelId = {index + 0.2}
                  clickRemove = {() => handleRemove(toDo.id)}
                  clickDone = {() => ChangeBtnStatus(doneId)}
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
