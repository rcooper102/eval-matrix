import { QUESTION_TYPES } from "../constants";
import { ALL_DEV } from './partials/all-dev';

export const CSS = [
  {
    type: QUESTION_TYPES.SMALL_RANGE,
    title: 'CSS Selectors',
    description: [
      'Is able to use simple CSS selectors to target areas of the application.',
      'Is able to compose complex selectors, including those which focus on HTML attributes.',
      'Understands cascading hierarchy and how to use it effectively.',
      'Has a deep understanding of how to work with (and around) selector specificity.',
    ],
    weight: 4,
    id: 'selectors',
  },
  {
    type: QUESTION_TYPES.SMALL_RANGE,
    title: 'SASS/SCSS',
    description: [
      'Is able to work with SCSS augmented CSS syntax.',
      'Understands the difference between SASS and SCSS.',
      'Is able to use SCSS variable to reduce code duplication.',
      'Is able to use SCSS mixins, functions, and placeholder rules to allow for inheritance.',
      'Is comfortable writing fit to purpose mixins, functions, and placeholder rules.',
    ],
    weight: 4,
    id: 'scss',
  },
  {
    type: QUESTION_TYPES.SMALL_RANGE,
    title: 'Inheritance',
    description: 'Strong understanding of the inheritance of properties from one node to another and how it impacts the display layer.',
    weight: 4,
    id: 'inheritance',
  },
  {
    type: QUESTION_TYPES.SMALL_RANGE,
    title: 'Layout',
    description: 'Understanding different layout techniques (float, flexbox, CSS Grid, etc.) and when to use each.',
    weight: 5,
    id: 'layout-techniques',
  },
  {
    type: QUESTION_TYPES.SMALL_RANGE,
    title: 'Box Model',
    description: 'Understands the box model and how DOM elements behave when their box model properties are modified (padding, margin, box-sizing, border, etc)',
    weight: 2,
    id: 'box-model',
  },
  ...ALL_DEV,
];
