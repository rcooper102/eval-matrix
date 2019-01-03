import { QUESTION_TYPES } from "../../constants";

export const ALL_DEV = [
  {
    type: QUESTION_TYPES.SMALL_RANGE,
    title: 'Simple Debugging',
    description: [
      'Is able to leverage browser and terminal based debugging techniques to investigate a problem.',
      'Is able to quickly gain footing in unfamiliar code in order to hone in on a problem.',
      'Is able to work with all major browsers and devices to solve platform specific problems.',
      'Is able to rapidly hone in on the source of a problem and determine if it is front end, API, or data related.',
    ],
    weight: 4,
    id: 'simple-debugging',
  },
  {
    type: QUESTION_TYPES.SMALL_RANGE,
    title: 'Advanced debugging',
    description: [
      'Is able to predict the cause of most bugs based on symptoms alone based on experience.',
      'Is able to find potential bugs within the codebase that may not yet be a problem, but could become issues.',
      'Is able to use advanced console tools such as the performance tab.',
    ],
    weight: 4,
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
    weight: 3,
    id: 'why',
  },
  {
    type: QUESTION_TYPES.SMALL_RANGE,
    title: 'Syntax',
    description: [
      'Confidence in writing syntactically correct code without a need to constantly reference documentation.'
    ],
    weight: 5,
    id: 'syntax',
  },
]
