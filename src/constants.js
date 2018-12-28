	export const QUESTION_TYPES = {
	RANGE: 'range',
	SMALL_RANGE: 'smallRange',
	BOOLEAN: 'boolean',
	SCALE: 'scale',
	TIME: 'time',
	AGREE: 'agree',
	AVERAGE: 'average',
};

export const QUESTION_RANGES = {
	[QUESTION_TYPES.RANGE]: [
		"None",
		"Dabbling",
		"Entry Level",
		"Beginner",
		"Intermediate",
		"Advanced",
		"Expert",
		"Master",
	],
	[QUESTION_TYPES.SMALL_RANGE]: [
		"Never Used",
		"Tried",
		"Comfortable",
		"Master",
	],
	[QUESTION_TYPES.BOOLEAN]: [
		"No",
		"Yes",
	],
	[QUESTION_TYPES.SCALE]: [
		0,
		1,
		2,
		3,
		4,
		5,
	],
	[QUESTION_TYPES.AGREE]: [
		'Strongly Disagree',
		'Disagree',
		'Neutral',
		'Agree',
		'Strongly Agree',
	],
	[QUESTION_TYPES.TIME]: [
		"Less than 1 year",
		"1-2 years",
		"3-5 years",
		"6-10 years",
		"10+ years",
	],
	[QUESTION_TYPES.AVERAGE]: [
		'Well Below Avg',
		'Below Avg',
		'Avg',
		'Above Avg',
		'Well Above Avg',
	]
}