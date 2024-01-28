




const ListSection = (props) => {

    return (
        <li className="listItem" style = {props.textStyle} >
        <h5>- {props.listContent} </h5> 
        <button className="done" onClick={props.click} >&#10003;</button>
        <button className="cancel" onClick={props.removeTask}>X</button >
        </li>
        
    )
  }

  export default ListSection