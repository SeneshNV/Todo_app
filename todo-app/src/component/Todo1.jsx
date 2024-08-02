import { useState } from "react";

import Form from "./Form";
import TaskList from "./TaskList";
import Footer from "./Footer";

export default function Todo1() {
  const [todos, setTodos] = useState([]);
  const completed_task = todos.filter((td) => td.done).length;
  const total_task = todos.length;

  return (
    <>
      <div>
        <Form todos={todos} setTodos={setTodos} />
      </div>

      <div>
        <TaskList todos={todos} setTodos={setTodos} />
      </div>
      <div>
        <Footer total_task={total_task} completed_task={completed_task} />
      </div>
    </>
  );
}
