import React, { Component } from 'react';
import { CONFIG } from '../config';
import { Controller } from '../services/controller';

import './app.css';

class App extends Component {
	constructor() {
		super();
		Controller.init(CONFIG);
        console.log(Controller.categories);
	}

    render() {
        return (
            <div>
                <h1>My React App!</h1>
            </div>
        );
    }
}

export default App;