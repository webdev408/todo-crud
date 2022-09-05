export const TodoItem = ({ item, index, deleteTodoItem, completeTodoItem, updateTodoItem }) => {
  
  return (
    <div className='todo-list'>
      <li style={{ textDecoration: item.complete ? "line-through" : "" }}>
        {item.todo}</li>
      <button className='btn btn-info ms-3' onClick={() => completeTodoItem(index)}><i className="fas fa-check"></i></button>
      <button className="btn btn-warning ms-3"onClick={() => updateTodoItem(index)}><i className="fas fa-pencil"></i>
      </button>
      <button className="btn btn-danger ms-3" onClick={()=>deleteTodoItem(index)}><i className="fas fa-trash"></i></button>
    </div>
  )
};