import React from "react"

import TodoItem from "./TodoItem"
import "./MainStyle.css"

function Main() {
    const firstname = "Morris"
    const lastname = "Boers"

    const happy = 8
    const styles = {
        fontSize: 20,
        color: "gray"
    }

    if (happy <= 5) {
        styles.color = "black"
    } else if (happy > 5) {
        styles.color = "blue"
    }

    return (
        <main>
            <p style={styles} >TODO list for: {`${firstname} ${lastname}`} </p>
            <div className='todolist'>
                <TodoItem item_name='item1'/>
                <TodoItem item_name='item2'/>
                <TodoItem item_name='item3'/>
            </div>
        </main>
    )

}

export default Main