'use client'
import {useEffect, useState} from 'react'
import { Todo } from '../types/Todo'
import * as P from '@/styles/estilos'
import { FaEdit, FaTrash  } from "react-icons/fa";
import { Form } from '@/components/form';
import { getAll, deleteTodo, doneTodoId } from '@/functions/todoList';


export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [envio, setEnvio] = useState(1)
  const [showEdit, setShowEdit] = useState(false)
  const [showId, setShowId] = useState(0)
  const [newText, setNewText] = useState('')

  function doneTodo(id: number, title: string, done: boolean) {
    done = !done
    console.log(done)
    doneTodoId({id, setEnvio, envio, done, title})
  }

  function handleEdit(id: number, title: string) {
    setShowEdit(!showEdit)
    setShowId(id)
    setNewText(title)
  }
  function handleSendEdit(id: number, title: string, done: boolean) {
    if(newText.trim().length < 4)
    {
      alert('Tarefa muito curta')
      return;
    }
    doneTodoId({id, setEnvio, envio, done, title})
    setShowEdit(!showEdit)
  }

  useEffect(()  => {
      getAll({setTodos});
  },[envio])

  return (
    <P.Container>
      <h1>Todo List</h1>
      <Form setEnvio={setEnvio} envio={envio}/>

      <P.List>
        {todos.map((todo: Todo) => (
          <div key={todo.id}>
            <li>
              <input type="checkbox" checked={todo.done} name='done' title='done' onChange={() => doneTodo(todo.id, todo.title, todo.done)}/> 
              {showEdit && showId === todo.id ? (
                <input 
                  onChange={e => setNewText(e.target.value)}
                  value={newText}
                  type="text"
                  name="title"
                  autoComplete='off'
                  placeholder="Digite sua tarefa"
                  className='edit'
                />
              ):(
                <p className={todo.done ? 'done' : ''}>{todo.title}</p>
              )}

              
             
              <div className='icons'> 
              {showEdit && showId === todo.id ? (
                <a onClick={() => handleSendEdit(todo.id, newText, todo.done)}>Salvar</a>
              ):(
                <a onClick={() => handleEdit(todo.id, todo.title)}><FaEdit /></a>
              )}
                
                <a onClick={() => deleteTodo(todo.id, setEnvio, envio)}><FaTrash/></a>
              </div>
            </li>
          </div>
        ))}
      </P.List>
    </P.Container>
  )
}
