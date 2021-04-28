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
    message: Message
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
        return (
            <div className="todoitem">
                <input type="checkbox" checked={this.props.message.completed}></input>
                <p>{this.state.message.text}</p>
            </div>
        )
    }
}

export default TodoItem