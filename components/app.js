import React from 'react';

import Nav from './nav';
import Footer from './footer';

export default class App extends React.Component {
    render() {
        return (
            <div className="row">
                <Nav />
                
                {this.props.children}
                
                <Footer />
            </div>
        );
    }
}