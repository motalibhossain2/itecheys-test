import React, { useState } from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Createtodo = (props) => {
    const [task, setTask] = useState({name:"", email:"", password:""})

    const HandleChange = (e) => {
        const name = e.target.name
        setTask((oldtask) => {
            return { ...oldtask, [name]: e.target.value }
        })
    }

    // submit handle 
    const HandleSubmit = (e) => {
        e.preventDefault()
        e.target.reset()
        // console.log(task)
        props.onCreate(task)
    }
    return (
        <div>
            <Form onSubmit={HandleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" onChange={HandleChange} required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email"  onChange={HandleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" onChange={HandleChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Createtodo