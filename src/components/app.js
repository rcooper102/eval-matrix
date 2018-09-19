import React, { Component } from "react";
import { CONFIG } from "../config";

import './app.css';

class App extends Component {
	constructor() {
		super();
		console.log(CONFIG);
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