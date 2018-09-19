import { QUESTION_TYPES } from "../constants";

export const CONFIDENCE = [
  {
    type: QUESTION_TYPES.RANGE,
    title: `Not afraid to take on tasks they've never done before`,
    description: 'tbd',
    weight: 1, 
    id: 'new-tasks',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Confident in approaching conflict with skpeticism in order to leverage logic and evidence as a process to resolving said conflict',
    description: 'tbd',
    weight: 1, 
    id: 'conflict',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Trusts their code changes when submitting PR (as opposed to saying "I hope this will work")',
    description: 'tbd',
    weight: 1, 
    id: 'tursts-their-code',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Does not fear failure',
    description: 'tbd',
    weight: 1, 
    id: 'no-failure-fear',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Able to accept criticism',
    description: 'tbd',
    weight: 1, 
    id: 'accepts-criticism',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Is confident in being able to accept and address P1 issues during support hours without help or support from other team members. ',
    description: 'tbd',
    weight: 1, 
    id: 'p1-issues',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Is confident challenging best practices when appropriate in order to improve development workflow. ',
    description: 'tbd',
    weight: 1, 
    id: 'challenges-best-practices',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Does not panic when faced with unexpected stress or when in a crisis situation.',
    description: 'tbd',
    weight: 1, 
    id: 'manages-stress',
  },
];