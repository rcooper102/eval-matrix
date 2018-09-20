export const QUESTION_TYPES = {
	RANGE: 'range',
	BOOLEAN: 'boolean',
	SCALE: 'scale',
	TIME: 'time',
};

export const QUESTION_RANGES = {
	[QUESTION_TYPES.RANGE]: [
		"None",
		"Entry Level",
		"Learning",
		"Beginner",
		"Intermediate",
		"Expert",
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
		'Do Not Agree',
		'Rarely Agree',
		'Sometimes Agree',
		'Agree',
		'Strongly Agree',
	],
	[QUESTION_TYPES.TIME]: [
		"Less than 1 year",
		"1-3 years",
		"3-6 years",
		"7-10 years",
		"10+ years",
	],
}