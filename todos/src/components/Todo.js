import React, { Component } from 'react';
import fetch from 'node-fetch';

class Todo extends Component{
    constructor(props){
        super(props)
        this.state = {
            todos :[]
        }
    }
    render(){
        const listTodos = this.state.todos.map((todo, index)=> 
            <li key="index">{todo.name} , {todo.description} , {todo.duration}</li>
        )
        return (
            <div className="container-fluid">
                <ul>
                    {listTodos}
                </ul>
            </div>
            
        )
    }
    componentWillMount(){
        fetch('https://todoapirest.herokuapp.com/todos')
        .then(res => res.json())
        .then(res => 
        this.setState({ 
            todos: res
        })
        );
        
    }
}

export default Todo;