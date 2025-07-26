import React, { useRef } from 'react'

interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e:React.FormEvent)=>void;
}

const InputField : React.FC<Props> = ({todo,setTodo,handleAdd}) => {
  
  const inputRef=useRef<HTMLInputElement>(null);

  return (
    <form 
      action="" 
      className='input' 
      onSubmit={(e)=>{
          handleAdd(e)
      inputRef.current?.blur()
    }}>
       <input 
       type="text"  
       placeholder='Enter a task' 
       className='input_box'
       value={todo}
       onChange={(e)=>setTodo(e.target.value)}
       ref={inputRef}
       
       />
       <button 
       className='input__submit' 
       type='submit'
       >Go</button>
    </form>
  )
}

export default InputField