import { useState } from 'react';
import {Button,Form,Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { edittask } from '../redux/actions/TodoActions';
function EditTask({el}) {
    const [show, setShow] = useState(false);
    const [text,setText] = useState('')
    const dispatch = useDispatch()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Edit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>New Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           <Form.Control type="text" onChange={(e)=>setText(e.target.value)} />   
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{dispatch(edittask(el.id,text));handleClose()}}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default EditTask