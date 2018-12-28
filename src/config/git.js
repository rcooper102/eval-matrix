import { QUESTION_TYPES } from "../constants";

export const GIT = [
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Command Line Familiarity',
    description: [
      'Is able to work with git from the command line with high proficiency.',
    ],
    weight: 1, 
    id: 'cli',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Pull Requests And Merging',
    description: [
      'Familiar with building pull requests and doing reliable merges.',
      'Consistently delivers high quality, descriptive PRs that require minimal feedback.',
    ],
    weight: 1, 
    id: 'prs',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Rebase',
    description: [
      'Knows the difference between Rebase and Merge.',
      'Knows when using rebase is appropriate.',
      'Is aware of the risks of rebase and how to mitigate them.',
      'Is comfortable doing a large rebase.',
    ],
    weight: 1, 
    id: 'rebase',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Philosophy',
    description: [
      'Understands the purpose of Version Control and why it was created the way it was.',
      'Leverages version control in an effective and organized manner.',
    ],
    weight: 1, 
    id: 'version-control-philosophy',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Bisect',
    description: [
      'Is able to use bisect to quickly determine the cause of a problem.',
    ],
    weight: 1, 
    id: 'bisect',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Blame',
    description: [
      'Is able to use Blame to investigate the source of a code change.',
      'Uses Blame to investigate context and expand knowledge.',
      'Does not use Blame to point fingers or shame colleagues.',
    ],
    weight: 1, 
    id: 'blame',
  },
];