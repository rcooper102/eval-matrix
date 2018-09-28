import { QUESTION_TYPES } from "../constants";

export const CONTRIBUTION = [
  {
    type: QUESTION_TYPES.AVERAGE,
    title: 'Work Contribution',
    description: [
      'Volume of work contributed each day.',
    ],
    weight: 2, 
    id: 'events',
  },
  {
    type: QUESTION_TYPES.AVERAGE,
    title: 'Contribution to GroupBy',
    description: [
      'Contributes value to GBI beyond job description.',
      'Includes company tools, culture, etc.',
    ],
    weight: 1, 
    id: 'events',
  },
];