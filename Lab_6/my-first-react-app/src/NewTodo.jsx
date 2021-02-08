import React from 'react';
import PropTypes from 'prop-types';

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button'

import './NewTodo.css';

const NewTodo = props => (
    <div className="newtodo">
            <label>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">Tytuł</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        name="title"
                        placeholder="Tytuł"
                        onChange={e => props.onChange({ [e.target.name]: e.target.value })}
                    />
                </InputGroup>
            </label>
            <label>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>Opis</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        name="desc"
                        as="textarea"
                        placeholder="Opis"
                        onChange={e => props.onChange({ [e.target.name]: e.target.value })}
                    />
                </InputGroup>
            </label>
        <Button variant="primary" size="lg" block onClick={props.onClick}>
            Dodaj
        </Button>
    </div>
);

NewTodo.propTypes = {
    onClick: PropTypes.func,
    onChange: PropTypes.func
}

export default NewTodo;