import React, { Component } from 'react';

class Navbar extends Component {
    
    render() {
        return (
            <>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Navbar <span class="badge bg-secondary">{this.props.nonZeroItems}</span></a>
                    </div>
                </nav>
               
                
            </>
        );
    }
}

export default Navbar;
