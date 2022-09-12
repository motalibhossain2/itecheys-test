import React from 'react'
import Alert from 'react-bootstrap/Alert';
import {FaRegTimesCircle } from 'react-icons/fa';


const Todos = (props) => {
    const handleClick = (index) => {
        props.onRemove(index)
    };
    return (
        <>
            <h1>Todo list.</h1>

            {props.onTask.map((item, index) => (
                <Alert key={index} className="py-1">
                    <div className="row">
                        <div className="col-lg-9">
                           {index}.{item.name}--{item.email}
                        </div>
                        <div className="col-lg-3 text-end">
                            <FaRegTimesCircle key={index} onClick={() => {
                                handleClick(index);
                            }}>delate</FaRegTimesCircle>
                        </div>
                    </div>
                </Alert>
            ))}
        </>
    );
}


export default Todos