import React from 'react'

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const AddTask = () => {
    const [id, setId]=useState('');
    const [text, setText]=useState('');
    const [address, setAddress]=useState('');
    
    const [isOpen, setIsOpen] = React.useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <Button variant="primary" onClick={showModal}>
                Launch demo modal
            </Button>

            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control size="sm" type="text" placeholder="id" value={id} onChange={(e)=>setId(e.target.value)}/>
                    <br />
                    <Form.Control size='sm' type="text" placeholder="Name" value={text} onChange={(e)=>setId(e.target.value)} />
                    <br />
                    <Form.Control size="sm" type="text" placeholder="Address" value={address} onChange={(e)=>setId(e.target.value)} />
                    {/* <form>
                        <div className='from-control mb-3'>
                            <label>text</label>
                            <input type="text" />
                        </div>
                    </form> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={hideModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={hideModal} s>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AddTask