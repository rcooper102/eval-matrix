import { EventDispatcher } from '../events/event-dispatcher';
import { RouterEvent } from '../events/router-event';

let _instance;

export class Router extends EventDispatcher {

	constructor(routes) {
		super();
		this.routes = routes;		
	}

	static init(routes) {
		if(!_instance) {
			_instance = new Router(routes);
			window.Router = Router;			
		}
		return _instance;
	}

	start() {
		window.onhashchange = this.onHashChange.bind(this);
		_instance.onHashChange();
		return _instance;
	}

	onHashChange() {
		const params = window.location.hash.substr(1).split('/');
		this.emit(RouterEvent.TYPES.CHANGE, new RouterEvent(params, this.routes[params[0]]));
	}
}