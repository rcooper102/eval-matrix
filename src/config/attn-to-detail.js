import { QUESTION_TYPES } from "../constants";

export const ATTN_TO_DETAIL = [
  {
    type: QUESTION_TYPES.RANGE,
    title: `Syntax Standards`,
    description: 'Adheres to agreed upon syntax standards consistently. (no <br> tags, no deprecated tags, no use of attributes when CSS should be used, etc.)',
    weight: 1,
    id: 'syntax-standards',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: `Follows Best Practices`,
    description: [
      'Makes an effort to adhere to best practices as much as possible.',
    ],
    weight: 1,
    id: 'best-practices',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: `Tests Work`,
    description: [
      'Thoroughly tests all work before it goes out.',
      'Always looks to test alternative or unexpected use cases.',
      'Tests in a variety of browsers to ensure stability.',
      'Predicts potential ripple effects of work and tests accordingly.',
    ],
    weight: 1,
    id: 'thorough-testing',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: `Hacky Solutions`,
    description: [
      'Avoids "work arounds" and "hacky" solutions in order to lazily solve problems in a way that introduces future risk.',
      'Understands why a solution does or doesn\'t work and writes code accordingly.',
    ]
    weight: 1,
    id: 'avoids-hacks',
  },
];
