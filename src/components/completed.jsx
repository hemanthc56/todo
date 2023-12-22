import React from "react"

function Completed(props){
    return(
        <div className="completed-container">
            {props.forCompletedTodos.map((item,index)=>{
                return (
                    <div key={index} className="display-completed">
                        <div className="bx-1"><h3>{item.con}</h3></div>
                    </div>
                )
            })}
        </div>
    )
}

export default Completed