'use client'
import { Dispatch, FormEvent, SetStateAction } from 'react';
import { Todo } from '../types/Todo';
import {useRouter} from 'next/navigation'

type sendUserType = {
    todo: string
    setTodo: (todo: string) => void
    setEnvio: (envio: number) => void
    envio: number
}
type getAllType = {
    setTodos: (todos: Todo[]) => void;
}
type doneTodoType = {
    id: number,
    setEnvio: Dispatch<SetStateAction<number>>,
    envio: number
    done: boolean
    title: string
}

export const getAll = async({setTodos}: getAllType) =>{
    try{
      const res = await fetch('http://localhost:4000/todo')
      const data = await res.json()
      setTodos(data)
    }catch(err){
      console.log(err)
      setTodos([])
    }
}

//FUNCAO DE ADICIONAR TAREFA
export const sendUser = async ({ todo, setTodo, setEnvio, envio }: sendUserType) => {
    if (todo.trim().length < 4) {
        alert('Por favor, digite pelo menos 4 caracteres')
        return;
    }
    try {
        const res = await fetch('http://localhost:4000/todo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: todo }) // Aqui estamos enviando apenas o campo 'title'
        });
        setTodo('');
        setEnvio(envio + 1);
    } catch (err) { 
        console.log(err);
    }
}

//FUNCAO DE REMOVER UMA TAREFA
export const deleteTodo = async (id: number, setEnvio: Dispatch<SetStateAction<number>>, envio: number) => {
    try {
        await fetch(`http://localhost:4000/todo/${id}`, {
            method: 'DELETE'
        });
        setEnvio(envio + 1);
    } catch (err) {
        console.log(err);
    }
}

export const doneTodoId = async ({id, setEnvio, envio, done, title}: doneTodoType) => {
    try {
        await fetch(`http://localhost:4000/todo/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ done, title })
        });
        setEnvio(envio + 1);
    } catch (err) {
        console.log(err);
    }
}




