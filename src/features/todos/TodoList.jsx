import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from './TodoSlice';

const TodoList = () => {
  const [input, setInput] = useState('');
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
            <button onClick={() => dispatch(toggleTodo(todo.id))}>
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;