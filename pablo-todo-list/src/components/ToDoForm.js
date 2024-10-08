import { Form, Button, Row } from 'react-bootstrap';
import React, { useState } from 'react';

export default function ToDoForm({uploadTask}) {
    const [title, setTitle] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleSubmit = (data) => {
        data.preventDefault();
        if(title && dueDate){
            uploadTask({title,dueDate});
            setTitle('');
            setDueDate('');
        }
    }


    return (
        <div>
            <Form onSubmit={handleSubmit}>

                <Form.Group>
                    <Row>
                        <Form.Label className='formLabel'>ToDo Item</Form.Label>
                    </Row>
                    <Row>
                        <Form.Control type="text" placeholder='Add todo item' value={title} onChange={(e) => setTitle(e.target.value)}></Form.Control>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Form.Label aria-labelledby='false' className='formLabel'>Due Date</Form.Label>
                    </Row>
                    <Row>
                    <Form.Control type="date" placeholder='Due Date' value={dueDate} onChange={(e) => setDueDate(e.target.value)}></Form.Control>
                    </Row>
                </Form.Group>
                <Button variant="primary" type="submit">
                Add Todo
                </Button>

            </Form>
        </div>
    );
}