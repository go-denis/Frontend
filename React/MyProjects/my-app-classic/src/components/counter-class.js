import React, { Component } from 'react';
import Button from '@mui/material/Button';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }; // Инициализация состояния
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 }); // Обновление состояния
    }

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <Button variant="outlined" color="error" onClick={this.increment}>Increment</Button>
            </div>
        );
    }
}

export default Counter;
