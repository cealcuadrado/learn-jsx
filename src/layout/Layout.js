import React from 'react';
import './Layout.css';

class Layout extends React.Component {
    constructor() {
        super();

        this.state = {
            foo: 10
        };
    }

    render() {
        return (
            <div>
                <h1>Learn JSX</h1>
                <hr />
                <p>5 + 5 = {5 + 5}</p>
                <hr/>
                <ul>
                    <li>Apples</li>
                    <li>Pears</li>
                    <li>Oranges</li>
                </ul>
                <div>
                    <p>Párrafo 1</p>
                    <p>Párrafo 2</p>
                </div>
                <hr />
                <input />
                <div className="foo">
                    <p>Foo is red!</p>
                </div>
                <div>
                    <p>x is {this.state.foo > 5 ? 'over' : 'below'} 10</p>
                </div>
            </div>
        );
    }
}

export default Layout;