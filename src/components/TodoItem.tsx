import React, {Component} from "react"
import Message from "./variable_types"

// Function based component variant: 
// function TodoItem(props: {message: {id: number, text: string, completed: boolean}}) {
//     return (
//         <div className="todoitem">
//             <input type="checkbox" checked={props.message.completed}></input>
//             <p>{props.message.text}</p>
//         </div>
//     )

// }

interface IProps {
    message: Message,
    handleChange: any
}

interface IState {
    message: Message
}

class TodoItem extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)

        this.state = {
            message: props.message
        };
    }


    render() {
        const completedStyle = {
            fontStyle: "italic", 
            color: "gray", 
            textDecoration: "line-through"
        }

        return (
            <div className="todoitem">
                <input 
                    type="checkbox" 
                    checked={this.props.message.completed} 
                    onChange={() => this.props.handleChange(this.props.message.id)}></input>
                <p style={this.props.message.completed ? completedStyle : {color:'black'}}>{this.props.message.text}</p>
            </div>
        )
    }
}

export default TodoItem