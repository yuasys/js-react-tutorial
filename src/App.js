import { useState } from "react";
import TodoList from  "./TodoList";

function App() {
  // お手本ではconst [todos, setTodos]だが、警告がでるので,setTodosを削除
  const [todos, setTodos] = useState([{id: 1, name: "Todo1", completed: false},
]);
  return (
    <>
      <TodoList todos={todos} />
      <input type="text" />
      <button>タスクを追加</button>
      <button>完了したタスクを削除</button>
      <div>残りのタスク:0</div>
    </>
    );
}

export default App;
