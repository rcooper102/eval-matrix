export class RouterEvent {

	static get TYPES() {
		return {
			CHANGE: 'RouterEvent.CHANGE',
		};
	}

	constructor(params, route) {
		this.params = params;
		this.route = route;
	}

}