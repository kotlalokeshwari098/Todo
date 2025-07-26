import React from 'react'
import type { Todo } from '../model'
import {AiFillEdit,AiFillDelete} from 'react-icons/ai';
import {MdDone} from 'react-icons/md';


type Props={
   todo:Todo,
   todos:Todo[],
   setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo:React.FC<Props> = ({todo,todos,setTodos}) => {
  const handleDone=(id:number)=>{
     setTodos(
      todos.map((todo)=>
      todo.id===id ? {...todo,isDone:!todo.isDone} : todo))
  }

  const handleDelete=(id:number)=>{
      setTodos(todos.filter((todo)=>todo.id!==id));
  }
  return (
    <form action="" className='flex gap-5'>
      {todo.isDone?(
         <span><s>{todo.todo}</s></span>
      ):(
        <span>{todo.todo}</span>
      )}
      
       <div className='flex gap-5'>
        <span><AiFillEdit /></span>
        <span onClick={()=>handleDelete(todo.id)}><AiFillDelete /></span>
        <span onClick={()=>handleDone(todo.id)}>
          <MdDone />
          
        </span>
       </div>
    </form>
  )
}

export default SingleTodo;