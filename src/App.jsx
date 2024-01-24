import { useState } from 'react'
import "./App.css"
let nextId = 0.1
let doneButton = 0


function App() {
  const [task, setTask] = useState("")
  const [toDo, setToDo] = useState([])
  const [btnState, setBtnState] = useState(false)
  const [doneButton, setDoneButton] = useState(0)

const clsValue = () => {

}

const addToList = (value) => {
  setToDo([...toDo, 
    {id: nextId += 1,
     task: value}
    ])
    setTask("")
    setDoneButton(doneButton + 1)
}

  const handleChange = (event) => {
      setTask(event.target.value)
  }

const handleRemove = (id) => {
    const newToDo = toDo.filter((toDo) => toDo.id !== id);
    setToDo(newToDo);
  }
const ChangeBtnState = () => {
  setBtnState(!btnState)
}


  return (
    <div className="backgroundContainer">
      <div className="fullContaier">

        <div className="inputContainer">
          <input className="inputSpace" value={task} onBlur={e => e.target.focus()} onChange={handleChange}></input>
          <button className="addButton" onClick={() => addToList(task)}>ADD</button>
        </div>

        <div className="listContainer">
          <ul>
            {
              toDo.map(toDo => (
                  <li className="listItem" key={toDo.id}>- {toDo.task}

                  <button id = {doneButton} className="done" onClick={ChangeBtnState} >&#10003;</button>

                  <button className="cancel" 
                  onClick={ 
                    ()=> {handleRemove(toDo.id)
                      className('cancel')
                    }  
                  }
                  >
                    X
                    </button >
                  </li>
              ))
            }
          </ul>
        </div>

      </div>
      
    </div>
  )
}


export default App
