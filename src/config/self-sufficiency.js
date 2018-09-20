import { QUESTION_TYPES } from "../constants";

export const SELF_SUFFICIENCY = [
  {
    type: QUESTION_TYPES.AGREE,
    title: `Manages own time well (related to reliability: completes tasks on time?)`,
    description: 'tbd',
    weight: 1, 
    id: 'manages-time',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: `Able to self criticize (knows own weaknesses)`,
    description: 'tbd',
    weight: 1, 
    id: 'self-criticize',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: `Proactive (doesn't always wait for others to assign work)`,
    description: 'tbd',
    weight: 1, 
    id: 'proactive',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: `Able to self review code in order to lessen the likelihood of feedback`,
    description: 'tbd',
    weight: 1, 
    id: 'self-review-code',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: `Needs minimal help from others`,
    description: 'tbd',
    weight: 1,
    id: 'minimal-help', 
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: `Is comfortable needing to rapidly context switch throughout the day with minimal loss in velocity`,
    description: 'tbd',
    weight: 1, 
    id: 'context-switching',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: `Actively takes steps to expand skillset and value to the company.`,
    description: 'tbd',
    weight: 1, 
    id: 'expands-value',
  },
];