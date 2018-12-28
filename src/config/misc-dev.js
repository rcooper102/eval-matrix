import { QUESTION_TYPES } from "../constants";

export const MISC_DEV = [
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Webpack',
    description: [
      'Is able to set up a blank webpack project.',
      'Is able to work with webpack config to configure project.',
      'Is able to diagnose and resolve webpack problems.',
    ],
    weight: 5, 
    id: 'webpack',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'CLI',
    description: [ 
      'Is able to leverage command line tools to augment development workflow.',
      'Is able to leverage bash scripting to increase efficiency.',
    ],
    weight: 4, 
    id: 'cli',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Risk Prediction',
    description: [
      'Is able to predict technical risk during conceptual phase of a project.',
      'Is able to act on predicted risk and avoid problems before they have a change to form.',
      'Feels comfortable making decisions based on risk and moving forward even when known risk is present.',
    ],
    weight: 3, 
    id: 'risk-mitigation',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Web Basics',
    description: [
      'Knows how HTTP works.',
      'Knows how DNS works.',
      'Understands REST and knows how to interact with a RESTful backend.',
    ],
    weight: 2, 
    id: 'web-concepts',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'API Testing',
    description: [
      'Is able to leverage a tool like Postman to interact with an API in isolation to test its functionality.',
      'Is comfortable modifying request headers.',
    ],
    weight: 5, 
    id: 'postman',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Localization',
    description: [
      'Clear understanding of the purpose of localization and how it improves the maintainability of a project.',
      'Reliably ensures that their work is effectively localized.',
      'Is comfortable working with complex localization string that may involve a variety of moving parts.',
      'Can create and work with localized formatting functions designed to parse data into locale specific formats.',
    ],
    weight: 4, 
    id: 'localization',
  },
];