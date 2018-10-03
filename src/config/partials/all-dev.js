import { QUESTION_TYPES } from "../../constants";

export const ALL_DEV = [
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Simple Debugging',
    description: [
      'Is able to leverage browser and terminal based debugging techniques to investigate a problem.',
      'Is able to quickly gain footing in unfamiliar code in order to hone in on a problem.',
      'Is able to work with all major browsers and devices to solve platform specific problems.',
      'Is able to rapidly hone in on the source of a problem and determine if it is front end, api, or data related.',
    ],
    weight: 1, 
    id: 'simple-debugging',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Advanced debugging',
    description: [
      'Is able to predict the cause of most bugs based on symptoms alone based on experience.',
      'Is able to find potential bugs within the codebase that may not yet be a problem, but could be.',
      'Is able to use advanced console tools such as the performance tab.',
    ],
    weight: 1, 
    id: 'advanced-debugging',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'How and Why',
    description: [
      'Has a deeper understanding of each aspect of the language than simply what the features do.',
      'Understands the philosophy of why the feature was created and how it actually functions under the hood.',
      "Familiar with the language specification.",
    ],
    weight: 1, 
    id: 'why',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Syntax',
    description: [
      'Confidence in writing syntaxically correct code without a need to constantly reference documentation.'
    ],
    weight: 1, 
    id: 'syntax',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Google Solutions',
    description: [
      'Is able to to leverage Google (or other search tools) to find solutions to problems quickly and efficiently.',
      'Is able to evaluate the proposed solution for validity and quality.',
      'Consistently understands the solution and is able to rebuild the solution to adhere to GBI best practices.',
    ],
    weight: 1, 
    id: 'google-solutions',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Browser Quirks',
    description: [
      'Has a strong understanding of different tendencies and behaviours of each browser and how to defensively program to avoid problematic behaviours.',
    ],
    weight: 1, 
    id: 'browser-quirks',
  },
]