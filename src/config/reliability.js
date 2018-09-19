import { QUESTION_TYPES } from "../constants";

export const RELIABILITY = [
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Shows up "on time" (when they say they will)',
    description: 'tbd',
    weight: 1, 
    id: 'on-time',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Available and on slack during core hours (especially when working remotely)',
    description: 'tbd',
    weight: 1, 
    id: 'core-hours',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Able to evaluate timelines for tasks',
    description: 'tbd',
    weight: 1, 
    id: 'timelines',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Able to complete tasks on time',
    description: 'tbd',
    weight: 1, 
    id: 'complete-tasks-on-time',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Able to estimate and complete tasks in MINIMAL amount of time',
    description: 'tbd',
    weight: 1, 
    id: 'estimates',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Able to take ownership of a project or chunk of code and dependabily deliver a quality product.',
    description: 'tbd',
    weight: 1, 
    id: 'ownership-of-code',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Able to manage their time within the office effectively without letting distractions impact productivity',
    description: 'tbd',
    weight: 1, 
    id: 'distractions',
  },
];