import { EventDispatcher } from '../events/event-dispatcher';

let _instance;

export class Controller extends EventDispatcher {

	constructor(config) {
		super();
		this.config = config;
	}

	static get MAX_CATEGORY_SCORE() {
		return _instance.config.constants.MAX_SCORE;
	}

	static get MAX_SCORE() {
		let max = 0;
		Controller.categories.forEach((category) => {
			max += _instance.config.categories[category].weight * Controller.MAX_CATEGORY_SCORE
		});
		return max
	}
	
	static get data() {
		return _instance.data;
	}

	static get config() {
		return _instance.config;
	}

	static init(config) {
		if(!_instance) {
			_instance = new Controller(config);
			Controller.resetData();
			window.Controller = Controller;
		}
		return _instance;
	}

	static emit(type, evt) {
		_instance.emit(type, evt);
	}

	static on(type, method, once) {
		_instance.on(type, method, once = false);
	}

	static once (type, method) {
		_instance.once(type, method);
	}

	static off (type, method) {
		_isntance.off(type, method);
	}

	static createId(category, id) {
		return `${category}:${id}`;
	}

	static parseId(id) {
		const s = id.split(":");
		return {
			category: s[0] || null,
			question: s[1] || null,
		};
	}

	static getQuestion(id) {		
		const data = Controller.parseId(id);
		const cat = _instance.config.categories[data.category];
		const ret = {
			id: id,
			category: cat,
			current: Controller.data.answers[id] || null,
			question: null,
		};
		for(let i = 0; i< cat.questions.length; i++) {
			if(cat.questions[i].id === data.question) {
				ret.question = cat.questions[i];
				break;
			}
		}

		return ret;
	}

	static get categories() {
		if(!_instance._categories) {
			_instance._categories = [];
			Object.keys(_instance.config.categories).forEach((i) => {
				_instance._categories.push(i);
			});
		}
		return _instance._categories;
	}

	static setAnswer(id, value) {
		const data = Controller.parseId(id);
		_instance.data.answers[Controller.createId(data.category, data.question)] = value;
	}

	static getCategoryScore(category) {
		let max = 0;
		let current = 0;
		_instance.config.categories[category].questions.forEach((question) => {
			max += question.weight;
			current += question.weight * _instance.data.answers[Controller.createId(category, question.id)] || 0;
		});
		return Math.ceil(current / max * Controller.MAX_CATEGORY_SCORE);
	}

	static get totalScore() {
		let current = 0;
		Controller.categories.forEach((category) => {
			current += Controller.getCategoryScore(category) * _instance.config.categories[category].weight;
		});
		return current;
	}

	static getNextQuestion(id) {
		return Controller.shiftQuestion(id, true)
	}

	static getPreviousQuestion(id) {
		return Controller.shiftQuestion(id, false)
	}

	static shiftQuestion(id, forward) {
		const direction = forward ? 1 : -1;
		const data = Controller.parseId(id);
		let index;
		const cat = _instance.config.categories[data.category];
		for(let i = 0; i< cat.questions.length; i++) {
			if(cat.questions[i].id === data.question){
				index = i;
				break;
			}
		}
		if(cat.questions[index + direction]){
			return { 
				id: Controller.createId(data.category,cat.questions[index + direction].id),
				category: cat,
				question: cat.questions[index + direction],
				progress: (index + direction) / cat.questions.length,
			};
		}

		const catIndex = Controller.categories.indexOf(data.category);
		if(Controller.categories[catIndex + direction]) {
			const category = _instance.config.categories[Controller.categories[catIndex + direction]];

			const i = forward ? 0 : category.questions.length - 1;

			return { 
				id: Controller.createId(Controller.categories[catIndex + direction],category.questions[i].id),
				category: category,
				question: category.questions[i],
				progress: 1 / category.questions.length,
			};
		}
		return null;
	}

	static get scoreSummary() {
		let ret = {
			categories: {},
			total: Controller.totalScore,
		};
		Controller.categories.forEach((category) => {
			ret.categories[category] = Controller.getCategoryScore(category);
		});
		return ret;
	}

	static resetData() {
		_instance.data = {
			answers: {},
		};
		Object.keys(_instance.config.categories).forEach((i) => {
			_instance.config.categories[i].questions.forEach((j) => {
				_instance.data.answers[Controller.createId(i,j.id)] = Math.random();
			});
		});
	}

	static export() {
		return JSON.stringify(_instance.data);
	}

	static import(data) {
		_instance.data = JSON.parse(data);
	}

}