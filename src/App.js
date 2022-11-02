import {useState} from 'react';
import {Header} from './components/Header';
import { Form } from "./components/Form";
import { Todos } from "./components/Todos";
import {useDispatch, useSelector} from 'react-redux';
import {deleteAll} from './redux/todoapp/actions';
import {deleteCompleted} from './redux/todoapp/actions';
import "./index.css";


function App() {
  // dispatch function to dispatch an action
  const dispatch = useDispatch();

  // getting todos state for conditional rendering
  const todos = useSelector((state)=>state.operationsReducer);

  // update form visibility state
  const [editFormVisibility, setEditFormVisibility]=useState(false);

  // editTodo state
  const [editTodo, setEditTodo]=useState('');

  // this function will trigger when someone clicks the edit icon
  const handleEditClick=(todo)=>{
    setEditFormVisibility(true);
    setEditTodo(todo);
  }

  // back button click
  const cancelUpdate=()=>{
    setEditFormVisibility(false);
  }

    return (
    <div className="wrapper App">
      <Header/>
      <Form editFormVisibility={editFormVisibility} editTodo={editTodo}
      cancelUpdate={cancelUpdate}/>
      <Todos handleEditClick={handleEditClick} editFormVisibility={editFormVisibility}/>
      <div className='handleDelete-btn' >
        {todos.length > 0 &&(<button className='btn btn-danger btn-md deleteCompleted'
          onClick={()=>dispatch(deleteCompleted())}>DELETE COMPLETED</button>)}
       
        {todos.length > 1 && (
          <button className='btn btn-danger btn-md delete-all'
          onClick={()=>dispatch(deleteAll())}>DELETE ALL</button>
        )}
      </div>
      
    </div>
  );
}

export default App;
