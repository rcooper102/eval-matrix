import { QUESTION_TYPES } from "../constants";
import { ALL_DEV } from './partials/all-dev';

export const CSS = [
  {
    type: QUESTION_TYPES.RANGE,
    title: 'CSS Selectors',
    description: [
      'Is able to use simple CSS selectors to target areas of the application.',
      'Is able to compose complex selectors, including those which focus on HTML attributes.',
      'Understands cascading hierarchy and how to use it effectively.',
      'Has a deep understanding of how to work with (and around) selector specificity.',
    ],
    weight: 1,
    id: 'selectors',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Combinators',
    description: [
      'Is able to use advanced CSS selection techniques to ensure specificity.',
      'Has a deep understanding of the available combinators, including when, why, and how to use them.',
      'Understands when/where certain combinators may not be used.',
    ],
    weight: 1,
    id: 'combinators',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'SASS/SCSS',
    description: [
      'Is able to work with SCSS augmented CSS syntax.',
      'Understands the difference between SASS and SCSS.',
      'Is able to use SCSS variable to reduce code duplication.',
      'Is able to use SCSS mixins, functions, and placeholder rules to allow for inheritance.',
      'Is comfortable writing fit to purpose mixins, functions, and placeholder rules.',
    ],
    weight: 1,
    id: 'scss',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Media queries',
    description: [
      'Is able to leverage media queries to target a variety of platforms.',
      'Is able to build a media query strategy in order to minimize excess code.',
    ],
    weight: 1,
    id: 'media-queries',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Inheritance',
    description: 'Strong understanding of the inheritance of properties from one node to another and how it impacts the display layer.',
    weight: 1,
    id: 'inheritance',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Layout',
    description: 'Understanding different layout techniques (float, flexbox, CSS Grid, etc.) and when to use each.',
    weight: 1,
    id: 'layout-techniques',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Box Model',
    description: 'Understands the box model and how DOM elements behave when their box model properties are modified (padding, margin, box-sizing, border, etc)',
    weight: 1,
    id: 'box-model',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Third Party Integration',
    description: [
      'Can integrate with third party CSS in a way to avoid conflicting selectors from creating display bugs.',
      'Has experience working with one or more well known CSS/SASS/SCSS libraries.',
      'Is able to effectively assess whether a particular third party library is suitable for integration.',
    ],
    weight: 1,
    id: 'third-party',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Z-index',
    description: 'Understands how the z-index property interacts with different DOM elements and different contexts.',
    weight: 1,
    id: '3d-planes',
  },
  ...ALL_DEV,
];
