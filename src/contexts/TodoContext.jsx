import { createContext, useState, useEffect } from "react";
import { fakeFetch } from "../API/Api";
export const todoContext = createContext();

export const TodosProvider = ({ children }) => {
  const [doneTodos, setdoneTodos] = useState([]);
  const [openTodos, setopenTodos] = useState([]);
  // console.log(doneTodos);
  const [todoDatas, setTodoDatas] = useState([]);
  const getAllTodos = async () => {
    try {
      const result = await fakeFetch("https://example.com/api/todos");
      if (result.status === 200) {
        setTodoDatas(result.data.todos);
        setdoneTodos(result.data.todos.filter((todo) => todo.isCompleted));
        setopenTodos(result.data.todos.filter((todo) => !todo.isCompleted));
        // console.log(result.data.todos);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getAllTodos();
  }, []);
  return (
    <todoContext.Provider
      value={{
        doneTodos,
        setdoneTodos,
        todoDatas,
        setTodoDatas,
        openTodos,
        setopenTodos
      }}
    >
      {children}
    </todoContext.Provider>
  );
};
