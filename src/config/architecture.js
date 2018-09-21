import { QUESTION_TYPES } from "../constants";

export const ARCHITECTURE = [
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Design Patterns',
    description: [
      'Understands the purpose of MVC and why we seperate business logic from presentation',
      'Understands the purpose of common design patterns such as singleton.',
      'Understands the difference between event based design and promise base design and why both are valid and when.',
    ],
    weight: 1, 
    id: 'events',
  },
  {
    type: QUESTION_TYPES.BOOLEAN,
    title: 'Personal Projects',
    description: [
      'Leverage personal projects to expand into aspects of development that they wouldn\'t during the work day.',
      'Works with alternative practices and methods in order to experiment potential improvements.',
      'Has series of own personal repositories (GIThub, Bitbucket, CodebaseHQ, etc).',
    ],
    weight: 1, 
    id: 'personal-projects',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Alternative Architectures',
    description: [
      'Has worked with alternative architectures such as React, Ember, or Angular.',
      'Is able to communicate benefits and downsides to a variety of architectures.',
      'Is able to leverage experience with a variety of architectures to aid in the creation of new and unique projects.',
    ],
    weight: 1, 
    id: 'different-architectures',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: `"Fluent" in GroupBy's Architecture`,
    description: [
      'Is familiar with the Storefront product.',
      'Is familiar with the Search backend.',
    ],
    weight: 1, 
    id: 'gbi',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Contributes Architecture',
    description: [
      'Is eager to help in architectural design.',
      'Is able to predict future requirements when designing architecture.',
      'Is able to theorize architecture before it is created.',
    ],
    weight: 1, 
    id: 'contributes-to-architecture',
  },
  {
    type: QUESTION_TYPES.BOOLEAN,
    title: 'Framework',
    description: [
      'Has built their own personal scaffolding and/or framework as either an educational experiment or in order to augment their personal workflow.'
    ],
    weight: 1, 
    id: 'created-framework',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Code Repetition',
    description: [
      'Understand DNRY philosophy.',
      'Works to adhere to DNRY philosophy in all code that they work on.',
    ],
    weight: 1, 
    id: 'do-not-repeat-yourself',
  },
];