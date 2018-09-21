import { QUESTION_TYPES } from "../constants";
import { ALL_DEV } from './partials/all-dev';

export const CSS = [
  {
    type: QUESTION_TYPES.RANGE,
    title: 'CSS Selectors',
    description: [
      'Is able to use simple CSS selectors to target areas of the application.',
      'Understands cascading hierarchy and how to use it effectively.',
    ],
    weight: 1,
    id: 'selectors',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Combinators',
    description: [
      'Is able to use advanced CSS selection techniques to ensure specificity.',
    ],
    weight: 1,
    id: 'combinators', 
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'SCSS',
    description: [
      'Is able to work with SCSS augmented CSS syntax.',
      'Is able to use SCSS variable to reduce code duplication.',
      'Is able to use SCSS mixins and functions to allow for inheritance.',
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
    description: 'Understanding different layout techniques (float, flexbox, etc) and when to use each.',
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
    description: 'Can integrate with third party CSS in a way to avoid conflicting selectors from creating display bugs.',
    weight: 1, 
    id: 'third-party',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Z-index',
    description: 'Understands how the z-index propety interacts with different DOM elements and different contexts.',
    weight: 1, 
    id: '3d-planes',
  },
  ...ALL_DEV,
];