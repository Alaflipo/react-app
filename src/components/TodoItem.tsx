import React from "react"

function TodoItem(props: {item_name: String}) {
    return (
        <div className="todoitem">
            <input type="checkbox"></input>
            <p>{props.item_name}</p>
        </div>
    )

}

export default TodoItem