import { QUESTION_TYPES } from "../constants";
import { ALL_DEV } from './partials/all-dev';

export const CSS = [
  {
    type: QUESTION_TYPES.RANGE,
    title: 'CSS Selectors',
    description: 'tbd',
    weight: 1,
    id: 'selectors',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Combinators',
    description: 'tbd',
    weight: 1,
    id: 'combinators', 
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'SCSS',
    description: 'tbd',
    weight: 1, 
    id: 'scss',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Media queries',
    description: 'tbd',
    weight: 1, 
    id: 'media-queries',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'understanding inheritance',
    description: 'tbd',
    weight: 1, 
    id: 'inheritance',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Understanding different layout techniques (float, flexbox, etc) and when to use each',
    description: 'tbd',
    weight: 1, 
    id: 'layout-techniques',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Understands the box model and how DOM elements behave when their box model properties are modified (padding, margin, box-sizing, border, etc)',
    description: 'tbd',
    weight: 1, 
    id: 'box-model',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Integration with 3rd party CSS',
    description: 'tbd',
    weight: 1, 
    id: 'third-party',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: '3-dimensional planes and specificity',
    description: 'tbd',
    weight: 1, 
    id: '3d-planes',
  },
  ...ALL_DEV,
];