import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewTodo } from '../redux/actions';
const TodoForm = () => {
    const [text, setText] = useState("");
  const dispatch = useDispatch();
    const onFormSubmit = (e) => {
      e.preventDefault();
      dispatch(addNewTodo(text));
      setText('');
    }
    const onInputChange = (e) => {
      setText(e.target.value);
    }
  return (
      <form className='form' onSubmit={onFormSubmit}>
      <input type='text' placeholder='Enter new todo...' className='input' value={text} onChange={onInputChange}/>
    </form>
  )
}

export default TodoForm
