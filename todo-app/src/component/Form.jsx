import { useState } from "react";
import style from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }

  return (
    <form className={style.task_insert_form} onSubmit={handleSubmit}>
      <div className={style.input_form}>
        <input
          className={style.text_box}
          type="text"
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          value={todo.name}
          placeholder="Enter todo item"
        />
        <button className={style.add_button} type="submit">
          Add Task
        </button>
      </div>
    </form>
  );
}
