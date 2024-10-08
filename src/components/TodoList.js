import { Tab, Row, Col, ListGroup } from 'react-bootstrap'
import React, { useState } from 'react';

const TodoList = ({ updateDate,tasks }) => {

    const judgeColor = (date) => {
        const today = new Date();
        const taskDate = new Date(date)
        const difference = taskDate.getTime() - today.getTime();
        //Formula from https://www.inchcalculator.com/convert/millisecond-to-day/
        const differenceDays = Math.ceil(difference / 86400000)
        if (differenceDays > 7) {
            return 'primary';
        } else if (differenceDays <= 7 && differenceDays >= 4) {
            return 'success';
        } else if (differenceDays < 4 && differenceDays >= 2) {
            return 'warning';
        } else {
            return 'danger';
        }

    };

    return (
        <Tab.Container>
            <Row>
                <Col sm={4}>
                    <ListGroup>

                        {tasks?.map((task, index) => (
                            <ListGroup.Item
                                key={index}
                                action
                                className={`list-group-item-${judgeColor(task.dueDate)}`}
                                href={`#todo${index + 1}`}
                            >
                                {task.title}
                            </ListGroup.Item>
                        ))}

                    </ListGroup>
                </Col>
                <Col sm={8}>
                    <Tab.Content>
                        {tasks?.map((task, index) => (
                            <Tab.Pane contentEditable eventKey={`#todo${index + 1}`} key={index}>
                                <p>{task.description}</p>
                                <input type="date" onChange={(e) => updateDate(index, e.target.value)} value={task.dueDate}/>
                            </Tab.Pane>
                        ))}
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );

}

export default TodoList;

