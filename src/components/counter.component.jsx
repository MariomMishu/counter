import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return (
            <>
                <ul>
                    <li class="list-unstyled">
                        <div>
                            <span class="badge bg-primary">{this.props.value}</span>
                            <button onClick={()=>this.props.OnIncrement(this.props.id)} type="button" class="btn btn-secondary m-2">+</button>
                            <button onClick={()=>this.props.OnDecrement(this.props.id)} type="button" class="btn btn-secondary m-2">-</button>
                            <button type="button" class="btn btn-danger m-2">Delete</button>
                        </div>
                    </li>

                </ul>

            </>
        );
    }
}

export default Counter;
