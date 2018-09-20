import React, { Component } from 'react';
import { CONFIG } from '../config';
import { Controller } from '../services/controller';
import { Router } from '../services/router';
import { RouterEvent } from '../events/router-event';
import { Home } from "../views";

import './app.css';

const ROUTES = {
    '': Home,
};

class App extends Component {
	componentDidMount() {
		Controller.init(CONFIG);
        const router = Router.init(ROUTES);
        router.on(RouterEvent.TYPES.CHANGE, (e) => {
            if(e.route) {
                this.setState({
                    view: e,
                })
            }
        });
        router.start();
	}

    render() {
        const TagName = this.state && this.state.view && this.state.view.route ? this.state.view.route : ROUTES[''];
        return (
            <div className='EvalMatrix'>                
                <TagName></TagName>
            </div>
        );
    }
}

export default App;