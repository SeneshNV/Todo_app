import TodoList from "./TodoLists";

export default function TaskList({ todos, setTodos }) {

  const newTodos = todos.slice().sort((a,b)=> Number(a.done)-Number(b.done))
  
  return (
    <div>
      {newTodos.map((td, index) => (
        <TodoList key={td.name} td={td} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
}
