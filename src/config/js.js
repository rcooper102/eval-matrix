import { QUESTION_TYPES } from "../constants";
import { ALL_DEV } from './partials/all-dev';

export const JS = [
  {
    type: QUESTION_TYPES.RANGE,
    title: 'DOM manipulation',
    description: [
      'Understands various DOM manipulation techniques and when to use them.',
      'Understands when DOM manipulation is not appropriate.',
      'Is familiar with how to work with data return when using document DOM selectors.',
      'Do not use DOM manipulation as a stopgap or hacky solution as an easy way out.',
    ],
    weight: 1,
    id: 'dom', 
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'OOP/Classes',
    description: [
      'Understands how a class is structured both syntaxically and functionally.',
      'Knows how to author a class in a re-usable and maintainable way.',
      'Has a strong foundational knowledge of object oriented philosophy and why it is a valuable design pattern.',
      'Knows when a complex object needs to be simplified into a series of child objects.',
    ],
    weight: 1, 
    id: 'oop',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Riot',
    description: [
      'Has built a strong understand of the riot framework.',
      'Knows all common syntax and how solve problems in a "Riot way".',
      'If familiar with Riot weaknesses and bugs and how to avoid them.',
    ],
    weight: 1, 
    id: 'riot',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Scope',
    description: [
      'Understanding of how the scope of `this` changes within a js application.',
      'Can leverage tools such as arrow functions, bind, and apply to ensure scope is not a problem.',
      'Understands the differences between the above tools and when each is appropriate.',
    ],
    weight: 1, 
    id: 'scope',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Filter, Map, Reduce',
    description: [
      'Understands the syntax of data manipulation functions.',
      'Understands how they interact with a piece of data.',
      'Can use them on both associative and linear arrays effectively.',
      'Knows when a simple `for` of `while` loop is a superior choice. (And when it is not)',
    ],
    weight: 1, 
    id: 'filter-functions',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Spread Operator',
    description: [
      'Understanding how the spread operator works and when to use it.',
      'Deep understanding of what is actually going on when the spread operator is used.',
    ],
    weight: 1, 
    id: 'spread',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Unit Testings',
    description: [
      'Able to write unit tests using Chai and Mocha.',
      'Understanding strong unit testing philosophy in order to ensure test quality.',
      'Is able to leverage strategies in order to maintain and improve coverage.',
    ],
    weight: 1, 
    id: 'unit-tests',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Efficiency',
    description: [
      'Understands how different coding practices can impact application performance.',
      'Knows how to predictively develop in a way to avoid performance risks.',
      'Understands how Garbage Collection works and how to optimize for it.',
      'Knows how to avoid access function complexity.',
      'Knows how to reduce overall CPU load through efficient code writing.',
    ],
    weight: 1, 
    id: 'efficiency',
  },
  ...ALL_DEV,
];