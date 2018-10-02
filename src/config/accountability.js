import { QUESTION_TYPES } from "../constants";

export const ACCOUNTABILITY = [
  {
    type: QUESTION_TYPES.AGREE,
    title: 'Failure',
    description: 'Is able to react to failure in a constructive way by working to address the failure as a problem to be solved and/or learned from.',
    weight: 1,
    id: 'react-to-failure',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: 'Help Needed',
    description: 'Is able to recognize when help is needed in order to avoid wasting time spinning.',
    weight: 1,
    id: 'need-help',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: 'Solution Oriented',
    description: [
      'Approaches challenges and problems with a solution in mind.',
      'Does not point blame, regardless of how deserving it may be.',
    ],
    weight: 1,
    id: 'solution-oriented',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: 'Problematic Behaviours',
    description: [
      'Able to self diagnose problematic behaviours and adapt.',
      'Able to receive criticism of problematic behaviours and accept criticism with grace.',
    ],
    weight: 1,
    id: 'problematic-behaviours',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: 'Personal Life',
    description: [
      'Ensures their personal life does not have a lasting detrimental impact on work life.',
      'Is able to compartmentalize personal life, particularily when personal life and work life intersect.',
      'Is able to maintain positive relationships with collegues inside and outside work without it impacting judgement or objectivity.',
    ],
    weight: 1,
    id: 'personal-life',
  },
];
