import React, { Component } from 'react';

class Navbar extends Component {
    
    render() {
        return (
            <>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Navbar <span class="badge bg-secondary">4</span></a>
                    </div>
                </nav>
               
                <button type="button" class="btn btn-primary m-4">Reset</button>
            </>
        );
    }
}

export default Navbar;