import { QUESTION_TYPES } from "../constants";

export const HTML = [
  {
    type: QUESTION_TYPES.RANGE,
    title: 'HTML Tags',
    description: [
      'Candidate has a strong understand of all common HTML tags.',
      'Candidate is aware of the purpose of each HTML tag and how to use them.',
      'Candidate is aware of tag deprecation and which tags are no longer best practice.',
      'Candidate is familiar with relevant properties for each HTML tag.',
    ],
    weight: 1, 
    id: 'tags',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Form Validation',
    description: [
      'Candidate is able to build an interactive form that is able to accept user data and validate it against expected return.',
      'Candidate has a strong knowledge in regards to form input security, including injection and other methods to interact with a for maliciously.',
    ],
    weight: 1, 
    id: 'form-validation',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Accessibility',
    description: [
      'Is familiar with how to manipulate tab index.',
      'Is aware of a all accessibility tags and properties.',
      'Understands accessibility standards and what is required to meet various levels of compliance.',
    ],
    weight: 1, 
    id: 'accessibility',
  },
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
      'Has a deeper understanding of each aspect of the language than simply what the features do',
      'Understands the philosophy of why the feature was created and how it actually functions under the hood',
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
];