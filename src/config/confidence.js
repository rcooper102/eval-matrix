import { QUESTION_TYPES } from "../constants";

export const CONFIDENCE = [
  {
    type: QUESTION_TYPES.AGREE,
    title: `New Tasks`,
    description: [
      'Able to take on new tasks with confidence and eagerness.',
      'Comfortable approaching new tasks from multiple angles.',
    ],
    weight: 5,
    id: 'new-tasks',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: 'Logical Reasoning',
    description: [
      'Confident in approaching conflict with skepticism in order to leverage logic and evidence as a process to resolving said conflict.',
      'Able to make connections between new tasks and problems which they\'ve solved in the past.',
    ],
    weight: 4,
    id: 'conflict',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: 'Code Trust',
    description: [
      'Trusts their code changes when submitting PR. (as opposed to saying "I hope this will work")',
      'Trusts themselves to maintain code which they\'ve written over time.',
    ],
    weight: 5,
    id: 'tursts-their-code',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: 'Fear Failure',
    description: [
      'Does not fear failure.',
      'Recognizes that failure is primarily a mechanism of education.',
      'Reacts to failure by adapting.',
    ],
    weight: 3,
    id: 'no-failure-fear',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: 'Addressing Crisis',
    description: [
      'Is confident in being able to accept and address P1 issues during support hours without help or support from other team members.',
      'Does not panic, even when panic appears reasonable.',
    ],
    weight: 4,
    id: 'p1-issues',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: 'Challenges Best Practices',
    description: 'Is confident challenging best practices when appropriate in order to improve development workflow.',
    weight: 2,
    id: 'challenges-best-practices',
  },
];
