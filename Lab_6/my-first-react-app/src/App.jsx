import React from 'react';
import TodoList from './TodoList'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


const App = () => (
    <Container>
        <Row className="justify-content-sm-center my-3">
            <TodoList />
        </Row>
    </Container>
);

export default App;