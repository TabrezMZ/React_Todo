import { useContext } from "react";
import { todoContext } from "..";
import { NavLink } from "react-router-dom";

export const DoneTodos = ({ DoneTodo }) => {
  const {
    setdoneTodos,
    doneTodos,
    setTodoDatas,
    todoDatas,
    openTodos,
    setopenTodos
  } = useContext(todoContext);
  return (
    <>
      <h1>Done Todos : {doneTodos?.length}</h1>
      {doneTodos?.length > 0 ? (
        <ul>
          {doneTodos?.map((todo) => (
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
      ) : (
        "Loading..."
      )}
    </>
  );
};
