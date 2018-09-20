import { QUESTION_TYPES } from "../constants";

export const GIT = [
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Command name familiiarity',
    description: 'tbd',
    weight: 1, 
    id: 'cli',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Branches and naming conventions',
    description: 'tbd',
    weight: 1, 
    id: 'branching',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Pull requests and merging',
    description: 'tbd',
    weight: 1, 
    id: 'prs',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Fetch vs pull',
    description: 'tbd',
    weight: 1, 
    id: 'fetch',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Rebase (and why it is evil ;) )',
    description: 'tbd',
    weight: 1, 
    id: 'rebase',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Understanding of version control philosophy and why a tool like GIT was designed in the way that it was. ',
    description: 'tbd',
    weight: 1, 
    id: 'version-control-philosophy',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Bisect',
    description: 'tbd',
    weight: 1, 
    id: 'bisect',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Blame',
    description: 'tbd',
    weight: 1, 
    id: 'blame',
  },
];