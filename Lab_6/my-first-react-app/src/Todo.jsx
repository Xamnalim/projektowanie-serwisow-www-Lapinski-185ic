import React from 'react';
import PropTypes from 'prop-types';

import './Todo.css';

const Todo = props => (
    <li>
        <label>
            {props.isDone && <span className="todo-desc"><del><b>{props.title}</b> <br/> {props.desc}</del></span>}
            {!props.isDone && <span className="todo-desc"><b>{props.title}</b> <br/> {props.desc}</span>}
            <input type="checkbox" onChange={() => props.onChange(props.id)} />
        </label>
    </li>
);

Todo.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    isDone: PropTypes.bool,
    onChange: PropTypes.func
}

export default Todo;