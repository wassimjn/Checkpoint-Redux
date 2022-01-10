import {Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteTask, donetask } from '../redux/actions/TodoActions'
import EditTask from './EditTask'
function Task({el}) {
    const dispatch=useDispatch()
    return(
     <div>
         <p style={{textDecoration:el.done?"line-through":null}}>{el.task}</p>
            <Button variant="success" onClick={()=>dispatch(donetask(el.id))}>{el.done?"Not Done":"Done"}</Button>{' '}
            <Button variant="danger" onClick={()=>dispatch(deleteTask(el.id))}>Delelte</Button>{' '}
            <EditTask el={el}/>
     </div>
    )
}
export default Task