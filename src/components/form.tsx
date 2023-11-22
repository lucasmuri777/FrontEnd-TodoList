import React, { FormEvent, useState } from 'react';
import * as F from '../styles/form'
import { sendUser } from '../functions/todoList'
import { Todo } from '../types/Todo'

type FormType = {
    setEnvio: (envio: number) => void
    envio: number
}

export const Form = ({setEnvio, envio}: FormType) => {
    const [todo, setTodo] = useState<string>('')
    const enviar = async (e: FormEvent) => {
        e.preventDefault()
        sendUser({todo, setTodo, setEnvio, envio})
    }

    return (
        <F.Form onSubmit={enviar} className='form'>
            <input
                onChange={e => setTodo(e.target.value)}
                value={todo}
                type="text"
                name="title"
                autoComplete='off'
                placeholder="Digite sua tarefa"
            />
            <button type="submit">
                +
            </button>
        </F.Form>
    )
}
