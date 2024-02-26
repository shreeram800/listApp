import { useState } from "react";
import "./assets/styles.css"

function Todo(){

    const [newTodoName, setNewTodoName] = useState("");
    const [todos,setTodo]=useState([]);
    function addNewTodo(){
        if(newTodoName===""){
            return
        }
        setTodo(current=>{
            return[...current, {name: newTodoName, completed: false, id: crypto.randomUUID()},
            ]
        })
        setNewTodoName("")
    }
    function toggleTodo(todoId, completed){
        setTodo(current=>{
            return current.map(todo=>{
                if(todo.id===todoId){
                    return {...todo, completed}
                }
                else{
                    return todo;
                }
            })
        })
    }
    function deleteTodo(todoId){
        setTodo(current=>current.filter(e=>{
            e.id!==todoId
        }))
    }
    return <>
    <ul id="list">
        {todos.map(todo=>{
            return (
            <li key={todo.id} className="list-item">
            <label className="list-item-label">
              <input checked={todo.completed} type="checkbox" data-list-item-checkbox onChange={e=>toggleTodo(todo.id, e.target.checked)} />
              <span data-list-item-text>{todo.name}</span>
            </label>
            <button data-button-delete onClick={e=>deleteTodo(todo.id)}>Delete</button>
          </li>)
        })}
      
    </ul>
    <div id="new-todo-form">
    <label htmlFor="todo-input">New Todo</label>
    <input type="text" id="todo-input" value={newTodoName} onChange={e=>setNewTodoName(e.target.value)}/>
    <button onClick={addNewTodo}>Add Todo</button>
  </div>
  </>
}

export default Todo;