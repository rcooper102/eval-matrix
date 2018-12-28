import { QUESTION_TYPES } from "../constants";

export const LEADERSHIP = [
  {
    type: QUESTION_TYPES.AGREE,
    title: `Helping Teammates`,
    description: [
      'Is eager to help teammates when needed.',
      'Is responsible about timeboxing help in order to avoid impacting productivity.',
    ],
    weight: 4,
    id: 'helps-teammates',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: `Takes Initiative`,
    description: [
      'Able to run with an idea and produce output.',
      'Makes an effort to spearhead new initiative of value for the company.',
    ],
    weight: 5,
    id: 'run-with-idea',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: `Crisis`,
    description: [
      'Is able to remain level headed during a crisis and help collegues move forward in a solution oriented manner.',
      'Does not escalate a crisis by introducing unnecessary stress.',
      'Able to evaluate when a implied crisis is actually a crisis.',
    ],
    weight: 4,
    id: 'crisis',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: `Colleague Failure`,
    description: 'Works to help other team members transform moments of failure or shame into education and growth.',
    weight: 3,
    id: 'team-failure',
  },
];
