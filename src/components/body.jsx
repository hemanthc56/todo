import React, { useState } from "react"
import "./body.css"
import Done from "./done.png"
import Completed from "./completed";

function Body(){

    var [todos,setTodos] = useState([]);
    var [completedTodos , setCompletedTodos] = useState([])
    var [content , setContent] = useState({
        con : ""
    });

    function handleContent(event){
        setContent({
            con : event.target.value
        });
    }   
    
    function handleTodo(event){
        event.preventDefault();
        if(content.con!=""){
            setTodos((preval)=>{
            return [...preval, content]
        })
        setContent({
            con : ""
        })
        }   
    }

    function handleComplete(id){
        setCompletedTodos((preval)=>{
            return [...preval , todos[id]]
        })

        setTodos((preval)=>{
            return preval.filter((con,index)=>{
                return index != id
            })
        })
    }

    return (
        <div className="body-con">
            <div className="todo-incomplete">
                <div className="todo-form">
                    <form onSubmit={handleTodo}>
                        <input type="text" onChange={handleContent} value={content.con} placeholder="Enter the todo" />
                    </form>
                    <button onClick={handleTodo}>add</button>
                </div>
                {todos.map((todo,index)=>{
                    return (
                    <div key={index} className="todo-item">
                        <div className="bx-1"><h3>{todo.con}</h3></div>
                        <div className="bx-2" onClick={()=>{handleComplete(index)}}><img style={{width:"2.5rem"}} src={Done} alt="" /></div>            
                    </div>
                    )
                })}
            </div>
            <div className="todo-completed">
                <div style={{textAlign:"center",color:"white",background:"#0A4008",padding:"7px"}}><h1>Completed</h1></div>
                <Completed forCompletedTodos={completedTodos}/>
            </div>
        </div>
    )
}

export default Body