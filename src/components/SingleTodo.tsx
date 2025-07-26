import React, { useEffect, useRef, useState } from "react";
import type { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e:React.FormEvent,id:number) => {
     e.preventDefault();

     setTodos(todos.map((todo)=>(
      todo.id===id?{...todo,todo:editTodo}:todo
     )))
     setEdit(false)
  };
  const inputRef=useRef<HTMLInputElement>(null);

  useEffect(()=>{
      inputRef.current?.focus();
  },[edit])

  return (
    <form action="" className="flex gap-5" onSubmit={(e)=>handleEdit(e,todo.id)}>
      {edit ? (
        <input value={editTodo} ref={inputRef} onChange={(e)=>setEditTodo(e.target.value)} className=""/>
      ) : todo.isDone ? (
        <span>
          <s>{todo.todo}</s>
        </span>
      ) : (
        <span>{todo.todo}</span>
      )}

      <div className="flex gap-5">
        <span onClick={() => 
        {
          if(!edit && !todo.isDone) {
          setEdit(!edit)
        };
    }}>
          <AiFillEdit />
        </span>
        <span onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
