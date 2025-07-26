import React from 'react'
import type { Todo } from '../model'
import SingleTodo from './SingleTodo'

type Prop={
   todos:Todo[],
   setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}


const TodoList:React.FC<Prop> = ({todos,setTodos}) => {

  return (
    <div>
        {todos.map((todo)=>(
            <SingleTodo 
              todo={todo} 
              key={todo.id}
              todos={todos}
              setTodos={setTodos}            
              />
            // <div>{item.todo}</div>
        ))}
    </div>
  )
}

export default TodoList