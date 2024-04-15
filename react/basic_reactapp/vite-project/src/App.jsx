

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
function App() {
  return <div>
    <Todo id={1} />
  </div>
}

function Todo({id}) {
  const [todo, setTodo] = useState([]);

useEffect(() => {
  axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
    .then(response=>{
        setTodo (response.data.todo);
    })
}, [])

  return <div>
    <h1>
      {todo.title}
      <h1>hyy</h1>
    </h1>
    <h4>
      {todo.description}
    </h4>
  </div>
}

export default App;
