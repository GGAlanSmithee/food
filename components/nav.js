import React from 'react';
import { Link } from 'react-router';

export default class Nav extends React.Component {
    render() {
        return (
            <div style={{height: '200px'}}>
                <Link to={'/'}>Home</Link>
            </div>
        );
    }
}