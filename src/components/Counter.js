import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';

export default class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Count: 0,
            date: new Date()
        }
    }

    CounterHandeler = () => {
        this.setState({
            Count: this.state.Count + 1
        })
    }
    CounterdecHandeler = () => {
        this.setState({
            Count: this.state.Count - 1
        })
    }
    // For clock 
    componentDidMount() {
        setInterval(
            () => this.tick(), 1000
        )
    }
    tick() {
        this.setState({
            date: new Date()
        })
    }
    


    render() {
        const { Count } = this.state
        return (
            <div>
                <p>{this.state.date.toLocaleTimeString()}</p>
                <p className='ps-5'>
                    <strong>{Count}</strong>
                </p>
                <Button className='btn btn-primary me-3' onClick={this.CounterHandeler}>+</Button>
                <Button className='btn btn-primary px-3' onClick={this.CounterdecHandeler} disabled={Count === 0 ? true : false}>-</Button>
            </div>
        )
    }
}
