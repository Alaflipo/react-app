import React, {Component} from "react"

import TodoItem from "./TodoItem"
import todoData from "./todoData"
import Message from "./variable_types"
import "./MainStyle.css"

interface IState {
    todos: Message[],
    firstname: String, 
    lastname: String, 
    happy: number 
}

class Main extends Component<{}, IState> {

    constructor() {
        super({})
        
        this.state = {
            todos: todoData,
            firstname: "Morris",
            lastname: "Boers",
            happy: 8
        }
    }

    generateStyle() {
        const styles = {
            fontSize: 20,
            color: "gray"
        }

        if (this.state.happy <= 5) {
            styles.color = "black"
        } else if (this.state.happy > 5) {
            styles.color = "blue"
        }
        return styles 
    }
    
    render() {
        const todo_components = this.state.todos.map(item => <TodoItem key={item.id} message={item}/>)
        const styles = this.generateStyle()

        return (
            <main>
                <p style={styles} >TODO list for: {`${this.state.firstname} ${this.state.lastname}`} </p>
                <div className='todolist'>
                    {todo_components}
                </div>
            </main>
        )
        }

}

export default Main
