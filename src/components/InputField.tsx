import React, { Dispatch, FC, FormEvent, SetStateAction, useRef } from 'react'
import './style.css'

interface Props {
  todo: string
  setTodo: Dispatch<SetStateAction<string>>
  handleAdd: (e: FormEvent) => void
}

const InputField: FC<Props> = ({ todo, setTodo, handleAdd }) => {

  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <form className="input" onSubmit={(e) => {
      handleAdd(e)
      inputRef.current?.blur()
    }}>
      <input
        ref={inputRef}
        type="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a Task"
        className="input-box"
      />
      <button className="input-submit" type="submit">
        GO
      </button>
    </form>
  )
}

export default InputField
