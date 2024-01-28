import { useState } from 'react';


// Lict section with buttons
const ListSection = (props) => {
// Condition for button click. Default status is false. When "done" button clicked status will change to true
    const [btnStatus, setBtnStatus] = useState(false)


    return (
        <li className="listItem" >
            {/* Style  condition. If button done will be clicked text decoration will change */}
        <h5 style = {{textDecoration: btnStatus? 'line-through': 'none', color: btnStatus? 'red': 'wheat'}}>- {props.listContent} </h5> 

         {/* Style  condition. If button done will be clicked BUTTON COLOR WILL CHANGE*/}
        <button className="done" style = {{backgroundColor: btnStatus?  'red': 'lightgreen'}} 

        id="{props.id}" onClick={() => setBtnStatus(!btnStatus)} ><p>&#10003;</p></button>
        {/* On click function. Task will be removed when  button x wil be clicked*/}
        
        <button className="cancel" onClick={props.removeTask}><p>X</p></button >
        </li>
        
    )
  }

  export default ListSection

