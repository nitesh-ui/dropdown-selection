import React, { Component } from 'react';
import loading from '../loading.gif';

class Spinner extends Component {
    
    render() {
        return (
            <>
                <div id="overlay">
                    <div className="text-center spinner-wrapper">
                        <img src={loading} alt="loading"/>
                    </div>
                </div>
            </>
            
        )
    }
}

export default Spinner