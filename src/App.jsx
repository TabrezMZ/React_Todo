import "./styles.css";
import { useEffect, useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { fakeFetch } from "./API/Api";
import { AllTodos } from "./pages/AllTodos";
import { DoneTodos } from "./pages/DoneTodos";
import { OpenTodos } from "./pages/OpenTodos";
import { AboutTodo } from "./pages/AboutTodo";

function getStyle({ isActive }) {
  return {
    color: isActive && "green",
    margin: "1rem",
    textDecoration: "none",
    border: "1px solid blue",
    padding: "0.5rem"
  };
}

export default function App() {
  return (
    <div className="App">
      <h6>React Practice set 8 Todos Q.7</h6>
      <nav>
        <NavLink style={getStyle} to="/">
          All Todos
        </NavLink>
        <NavLink style={getStyle} to="/donetodos">
          Done Todos
        </NavLink>
        <NavLink style={getStyle} to="/opentodos">
          Oen Todos
        </NavLink>
      </nav>
      <hr style={{ margin: "03rem" }} />
      <Routes>
        <Route path="/" element={<AllTodos />} />
        <Route path="/donetodos" element={<DoneTodos />} />
        <Route path="/opentodos" element={<OpenTodos />} />
        <Route path="/todo/:todoId" element={<AboutTodo />} />
      </Routes>
    </div>
  );
}
