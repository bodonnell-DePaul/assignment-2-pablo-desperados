import React, { useState } from 'react';
import './App.css';
import './components/ToDoForm.js'
import ToDoForm from './components/ToDoForm.js';
import TodoList from './components/TodoList.js';
import { Container, Row, Col } from 'react-bootstrap';
import {todos} from './todoItems.js'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [tasks, setTasks] = useState(todos);

  const uploadTask =(newTask)=>{
    newTask={...newTask, description:"Placeholder"};
    setTasks([...tasks, newTask]);
  }

  const updateDate =(selectedIndex,newDate)=>{
    if(selectedIndex && newDate){
      const selectedTasks = tasks?.map((task, index)=>{
        if (index == selectedIndex){
          return {...task, dueDate: newDate }
        }else{
          return task;
        }
      })
      setTasks(selectedTasks)
    }
  }
  return (
    <Container>
      <h1>Assignment 2: Pablo's ToDo List</h1>
      <Row>
        <Col sm={4}>
          <div className='todo-form-container'>
            <ToDoForm uploadTask={uploadTask}/>
          </div>
        </Col>
        <Col sm={8}>
          <TodoList updateDate={updateDate} tasks={tasks}/>
        </Col>
      </Row>

    </Container>

  );
}

export default App;
