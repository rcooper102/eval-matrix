import { QUESTION_TYPES } from "../constants";

export const GIT = [
  {
    type: QUESTION_TYPES.SMALL_RANGE,
    title: 'Pull Requests And Merging',
    description: [
      'Familiar with building pull requests and doing reliable merges.',
      'Consistently delivers high quality, descriptive PRs that require minimal feedback.',
    ],
    weight: 3, 
    id: 'prs',
  },
  {
    type: QUESTION_TYPES.SMALL_RANGE,
    title: 'Rebase',
    description: [
      'Knows the difference between Rebase and Merge.',
      'Knows when using rebase is appropriate.',
      'Is aware of the risks of rebase and how to mitigate them.',
      'Is comfortable doing a large rebase.',
    ],
    weight: 2, 
    id: 'rebase',
  },
  {
    type: QUESTION_TYPES.BOOLEAN,
    title: 'Philosophy',
    description: [
      'Understands the purpose of Version Control and why it was created the way it was.',
      'Leverages version control in an effective and organized manner.',
    ],
    weight: 2, 
    id: 'version-control-philosophy',
  },
  {
    type: QUESTION_TYPES.SMALL_RANGE,
    title: 'Bisect',
    description: [
      'Is able to use bisect to quickly determine the cause of a problem.',
    ],
    weight: 2, 
    id: 'bisect',
  },
];