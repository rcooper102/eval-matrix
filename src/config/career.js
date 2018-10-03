import { QUESTION_TYPES } from "../constants";

export const CAREER = [
  {
    type: QUESTION_TYPES.TIME,
    title: 'Years of Industry Experience',
    description: [
      'This is a reflection of complete years experience working full time in a front end developer capacity within the industry.',
      'Both contract and salaried positions count.',
      'Time in school does not.',
    ],
    weight: 1,
    id: 'years-experience',
  },
  {
    type: QUESTION_TYPES.BOOLEAN,
    title: 'Personal Projects/Personal Growth',
    description: [
      'Leverages personal projects to improve skills which may not be cultivated from 9-5.',
      'Experiments with new or alternatively solutions to known problems.',
      'Has series of own personal repositories (GIThub, Bitbucket, CodebaseHQ, etc).',
    ],
    weight: 1,
    id: 'personal-projects',
  },
];