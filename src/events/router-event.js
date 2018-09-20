export class RouterEvent {

	static get TYPES() {
		return {
			CHANGE: 'RouterEvent.CHANGE',
		};
	}

	constructor(params) {
		this.params = params;
	}

}