import { useParams } from "react-router-dom";
import { useContext } from "react";
import { todoContext } from "..";

export const AboutTodo = ({ todoData }) => {
  const { setdoneTodos, doneTodos, setTodoDatas, todoDatas } = useContext(
    todoContext
  );
  const { todoId } = useParams();
  const todo = todoDatas.find((todo) => todo.id === +todoId);
  // console.log(todo);
  return (
    <>
      <h3>Todo Description : </h3>
      <h4>Title : {todo.title}</h4>
      <p>Description : {todo.description}</p>
      <p>
        Status :{todo.isCompleted ? <span>Done</span> : <span>Not Done</span>}
      </p>
    </>
  );
};
