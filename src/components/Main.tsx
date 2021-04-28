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
        this.handleChange = this.handleChange.bind(this)
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

    
    handleChange(id: number) {
        this.setState((prevState) => {
            const updatedtodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedtodos
            }
        })
    }
    
    render() {
        const todo_components = this.state.todos.map(item => <TodoItem key={item.id} message={item} handleChange={this.handleChange}/>)
        const styles = this.generateStyle()

        return (
            <main>
                <p style={styles} >TODO list for: {`${this.state.firstname} ${this.state.lastname}`} </p>
                <div className='todolist'>
                    {todo_components}
                </div>
                <button onClick={() => console.log("click!")} onMouseOver={() => console.log("click me pls")}> Click me :) </button>
            </main>
        )
        }

}

export default Main
