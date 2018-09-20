import React, { Component } from 'react';
import { CONFIG } from '../config';
import { Controller } from '../services/controller';
import { Router } from '../services/router';
import { RouterEvent } from '../events/router-event';
import { Home } from "../views";

import './app.css';

const ROUTES = {
    "": Home,
    "home": Home,
};

class App extends Component {
	constructor() {
		super();
		Controller.init(CONFIG);
        const router = Router.init(ROUTES);
        router.on(RouterEvent.TYPES.CHANGE, (e) => {
            console.log("change", e);
        });
        router.start();
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