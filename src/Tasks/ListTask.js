import { useSelector } from "react-redux"
import Task from "./Task"
import {Button, ButtonGroup} from 'react-bootstrap'
import { useState } from "react"


function ListTask() {
    const [filtre,setFiltre]=useState(false)
    const[done,setDone]=useState(true)

    const todos=useSelector(state=>state.todoReducer.todos)
    return(
        <div>
            <h1>SHOW</h1>
            <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" onClick={()=>setFiltre(false)}>ALL</Button>
            <Button variant="secondary" onClick={()=>{setFiltre(true);setDone(false)}}>NOT DONE</Button>
            <Button variant="secondary" onClick={()=>{setFiltre(true);setDone(true)}}>DONE</Button>
            </ButtonGroup>
            { !filtre?todos.map(el=>(<Task key={el.id} el={el}/>))
            :done?todos.filter(el=>el.done).map(el=>(<Task key={el.id} el={el}/>))
            :todos.filter(el=>!el.done).map(el=>(<Task key={el.id} el={el}/>))}
            
        </div>
    )
}
export default ListTask