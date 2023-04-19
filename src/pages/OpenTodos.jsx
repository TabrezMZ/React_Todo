import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { todoContext } from "..";

export const OpenTodos = ({ OpenTodo }) => {
  const {
    setdoneTodos,
    doneTodos,
    setTodoDatas,
    todoDatas,
    setopenTodos,
    openTodos
  } = useContext(todoContext);

  return (
    <>
      <h1>Open Todos : {openTodos?.length}</h1>
      <ul>
        {openTodos?.map((todo) => (
          <li key={todo.id}>
            <h4>Title : {todo.title}</h4>
            <p>Description : {todo.description}</p>
            <p>
              Status :
              {todo.isCompleted ? <span>Done</span> : <span>Not Done</span>}
            </p>
            <NavLink to={`/todo/${todo.id}`}>Expand Todo</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};
