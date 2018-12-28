import { QUESTION_TYPES } from "../constants";

export const LEADERSHIP = [
  {
    type: QUESTION_TYPES.AGREE,
    title: `Helping Teammates`,
    description: [
      'Is eager to help teammates when needed.',
      'Is responsible about timeboxing help in order to avoid impacting productivity.',
    ],
    weight: 1,
    id: 'helps-teammates',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: `Steps Forward`,
    description: 'Makes an effort to ensure that the opinion of junior employees (or subordinates?) is heard during group discussions.',
    weight: 1,
    id: 'speaks-up',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: `Takes Initiative`,
    description: [
      'Able to run with an idea and produce output.',
      'Makes an effort to spearhead new initiative of value for the company.',
    ],
    weight: 1,
    id: 'run-with-idea',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: `Crisis`,
    description: [
      'Is able to remain level headed during a crisis and help collegues move forward in a solution oriented manner.',
      'Does not escalate a crisis by introducing unnecessary stress.',
    ],
    weight: 1,
    id: 'stress',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: `Team Context`,
    description: 'Strong awareness of the context of other developers on the team and able to leverage that knowledge to help mitigate risk.',
    weight: 1,
    id: 'team-context',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: `Collegue Failure`,
    description: 'Works to help other team members transform moments of failure or shame into education and growth.',
    weight: 1,
    id: 'team-failure',
  },
];
