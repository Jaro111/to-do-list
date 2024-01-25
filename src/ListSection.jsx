const ListSection = (props) => {
    return (
        <li className="listItem">{props.listContent}
        <button index = {props.doneIndex} className="done" onClick={props.clickDone}>&#10003;</button>
        <button index = {props.cancelId}  className="cancel" onClick = {props.clickRemove}
        >X</button >
        
        </li>
    
    )
  }

  export default ListSection