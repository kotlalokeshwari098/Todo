import { useEffect, useState } from "react"
import InputField from "./components/InputField"
import type { Todo } from "./model";
import TodoList from "./components/TodoList";

const App : React.FC = () => {
  const [todo,setTodo]=useState<string>('');
  const [todos,setTodos]=useState<Todo[]>([]) 

  const handleAdd=(e:React.FormEvent)=>{
       e.preventDefault();     
         setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}])
         setTodo(' ')      
  }

  useEffect(()=>{
    console.log(todos)
  },[todos])

  return (
    <div className="App">
       <span className="heading">Taskify</span>
       <InputField 
         todo={todo}
         setTodo={setTodo} 
         handleAdd={handleAdd}
         
        />
       <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App