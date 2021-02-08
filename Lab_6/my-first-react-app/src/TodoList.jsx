import React, { Component } from 'react';
import Todo from './Todo';
import NewTodo from './NewTodo';

import Col from 'react-bootstrap/Col';

import './TodoList.css';

class TodoList extends Component {
    constructor() {
        super();

        this.state = {
            todos: [
                { id: 0, title: "Zrobić zakupy", desc: "Kupić mleko, jajka i masło.", isDone: false },
                { id: 1, title: "Posprzątać dom", desc: "Zetrzeć kurze w salonie. Umyć podłogi w kuchni i łazience", isDone: false }
            ],
            newTodo: { id: 2, title: "", desc: "", isDone: false },
        }
        this.handleCheck = this.handleCheck.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleCheck(id) {
        const todos = this.state.todos.map(todo => {
            if (todo.id === id) {
                const newTodo = {
                    ...todo,
                    isDone: !todo.isDone,
                };
                return newTodo;
            }
            return todo;
        });
        this.setState({ todos });
    }

    handleChange(changedValues) {
        const newTodo = { ...this.state.newTodo, ...changedValues };
        this.setState({ newTodo });
    }

    handleAdd() {
        const todos = this.state.todos.concat(this.state.newTodo);
        this.setState(prevState => {
            return {
                todos,
                newTodo: {...prevState.newTodo, id: prevState.newTodo.id + 1}
            }
        });

    }

    render() {
        const myTodos = this.state.todos.map(el => {
            return <Todo key={el.id} id={el.id} title={el.title} desc={el.desc} isDone={el.isDone} onChange={(id) => this.handleCheck(id)} />
        })
        return (
            <Col xs={6}>
                <h1>Lista zadań #1</h1>
                <ul>
                    {myTodos}
                </ul>
                <NewTodo onChange={(changedValues) => this.handleChange(changedValues)} onClick={() => this.handleAdd()} />
            </Col>
        );
    }
}

export default TodoList;