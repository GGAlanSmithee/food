import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="row full-width">
                    <p>1 block = 1.5g fat | 9g carbs  | 7g protein</p>
                    <p>2 block = 3g fat   | 18g carbs | 14g protein</p>
                    <p>3 block = 4.5g fat | 27g carbs | 21g protein</p>
                </div>
            </footer>
        );
    }
}