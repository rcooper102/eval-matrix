import { QUESTION_TYPES } from "../constants";

export const ATTN_TO_DETAIL = [
  {
    type: QUESTION_TYPES.RANGE,
    title: `Syntax standards (no <br> tags, no deprecated tags, no use of attributes when CSS should be used, etc)`,
    description: 'tbd',
    weight: 1, 
    id: 'syntax-standards',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: `Syntax consistency (naming conventions, use of SCSS variables, etc)`,
    description: 'tbd',
    weight: 1, 
    id: 'syntax-consistency',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: `Follows best practices (locale, unit tests, etc)`,
    description: 'tbd',
    weight: 1, 
    id: 'best-practices',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: `THOROUGH testing`,
    description: 'tbd',
    weight: 1, 
    id: 'thorough-testing',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: `Tests outlier use cases and potential ripple effects of changes made to the code base.`,
    description: 'tbd',
    weight: 1, 
    id: 'ripple-effects'
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: `Avoids "work arounds" and "hacky" solutions in order to lazily solve problems in a way that introduces future risk. `,
    description: 'tbd',
    weight: 1, 
    id: 'avoids-hacks',
  },
];