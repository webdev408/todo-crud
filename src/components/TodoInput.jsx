import { useState } from "react";

export const TodoInput = ({createTodoItem}) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      return console.log('please add something todo')
    }
    createTodoItem(value)
    setValue("")
  }

  return (
    <div className="container">
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="create todo" value={value}
        onChange={(e) => setValue(e.target.value)} className='form-control' />
      <button className="btn btn-primary my-2">Create</button>
      </form>
    </div>
  )
};