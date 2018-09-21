import { QUESTION_TYPES } from "../constants";
import { ALL_DEV } from './partials/all-dev';

export const JS = [
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Basic Syntax',
    description: [

    ],
    weight: 1, 
    id: 'basic-syntax',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'DOM manipulation. ',
    description: 'tbd',
    weight: 1,
    id: 'dom', 
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'OOP/Classes',
    description: 'tbd',
    weight: 1, 
    id: 'oop',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Riot',
    description: 'tbd',
    weight: 1, 
    id: 'riot',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Understanding scope and how to work with it',
    description: 'tbd',
    weight: 1, 
    id: 'scope',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Being able to work with filter, map, reduce',
    description: 'tbd',
    weight: 1, 
    id: 'filter-functions',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Understanding how the spread operator works and when to use it',
    description: 'tbd',
    weight: 1, 
    id: 'spread',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Able to write unit tests',
    description: 'tbd',
    weight: 1, 
    id: 'unit-tests',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Understanding of code efficiency and is able to evaluate and optimize code to improve performance',
    description: 'tbd',
    weight: 1, 
    id: 'efficiency',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Hates jQuery with the fiery passion of a thousand stars simultaneously reaching critical supernova. (aka has no dependancy on jquery to write javascript)',
    description: 'tbd',
    weight: 1, 
    id: 'jquery',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Memory Management',
    description: 'tbd',
    weight: 1, 
    id: 'memory-management',
  },
  ...ALL_DEV,
];