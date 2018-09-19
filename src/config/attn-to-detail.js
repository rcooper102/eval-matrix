import { QUESTION_TYPES } from "../constants";

export const ATTN_TO_DETAIL = [
  {
    type: QUESTION_TYPES.RANGE,
    title: `Syntax standards (no <br> tags, no deprecated tags, no use of attributes when CSS should be used, etc)`,
    description: 'tbd',
    weight: 1, 
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: `Syntax consistency (naming conventions, use of SCSS variables, etc)`,
    description: 'tbd',
    weight: 1, 
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: `Follows best practices (locale, unit tests, etc)`,
    description: 'tbd',
    weight: 1, 
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: `THOROUGH testing (with screenshots)`,
    description: 'tbd',
    weight: 1, 
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: `Tests outlier use cases and potential ripple effects of changes made to the code base.`,
    description: 'tbd',
    weight: 1, 
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: `Avoids "work arounds" and "hacky" solutions in order to lazily solve problems in a way that introduces future risk. `,
    description: 'tbd',
    weight: 1, 
  },
];