import React, { Component } from 'react';

class Reset extends Component {
    
    render() {
        return (
            <button onClick={this.props.onReset} type="button" class="btn btn-primary m-4">Reset</button>
                
        );
    }
}

export default Reset;
