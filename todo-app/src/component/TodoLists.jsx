import style from "./todoLists.module.css";

export default function TodoList({ td, todos, setTodos }) {
  function handleDlt(td) {
    console.log("dlt button click", td);
    setTodos(todos.filter((todo) => todo !== td));
  }

  function handleClick(name) {
    console.log("clicked", td);
    setTodos(
      todos.map((item) =>
        item.name === name ? { ...item, done: !item.done } : item
      )
    );
  }

  const strike = td.done ? style.done_true: "";

  return (
    <div className={style.todo_list_container}>
      <div className={style.todo_list}>
        <span className={strike} onClick={() => handleClick(td.name)}>
          {td.name}
        </span>

        <button onClick={() => handleDlt(td)} className={style.dlt_btn}>
          x
        </button>
      </div>
    </div>
  );
}
