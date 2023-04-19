import { useContext } from "react";
import { todoContext } from "..";

export const AllTodos = () => {
  const {
    setdoneTodos,
    doneTodos,
    setTodoDatas,
    todoDatas,
    setopenTodos,
    openTodos
  } = useContext(todoContext);

  const markTodo = (todo) => {
    setTodoDatas(
      todoDatas.map((todoo) => ({
        ...todoo,
        isCompleted: todoo.id === +todo.id ? true : todoo.isCompleted
      }))
    );
    setdoneTodos(
      [...doneTodos, todo].map((todo) => ({ ...todo, isCompleted: true }))
    );
    setopenTodos(openTodos.filter((tod) => tod.id !== todo.id));
  };

  const undoTodo = (todo) => {
    setTodoDatas(
      todoDatas.map((todoo) => ({
        ...todoo,
        isCompleted: todoo.id === +todo.id ? false : todoo.isCompleted
      }))
    );
    setdoneTodos(doneTodos.filter((tod) => tod.id !== todo.id));
    setopenTodos(
      [...openTodos, todo].map((todo) => ({ ...todo, isCompleted: false }))
    );
  };

  return (
    <>
      <h1>All Todos</h1>
      {todoDatas?.length > 0 ? (
        <ul>
          {todoDatas?.map((todo) => (
            <li
              style={{ textDecoration: todo.isCompleted && "line-through" }}
              key={todo.id}
            >
              <h4>Title : {todo.title}</h4>
              <p>Description : {todo.description}</p>
              <p>
                Status :
                {todo.isCompleted ? <span>Done</span> : <span>Not Done</span>}
              </p>
              <button
                disabled={todo.isCompleted}
                onClick={() => markTodo(todo)}
              >
                Mark as Done
              </button>
              <button
                disabled={!todo.isCompleted}
                onClick={() => undoTodo(todo)}
              >
                Undo
              </button>
            </li>
          ))}
        </ul>
      ) : (
        "Loading..."
      )}
    </>
  );
};
