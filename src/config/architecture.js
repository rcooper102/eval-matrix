import { QUESTION_TYPES } from "../constants";

export const ARCHITECTURE = [
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Understands OOP and separation of concern',
    description: 'tbd',
    weight: 1, 
    id: 'oop',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Understands events, promises, MVC, etc.',
    description: 'tbd',
    weight: 1, 
    id: 'events',
  },
  {
    type: QUESTION_TYPES.BOOLEAN,
    title: 'Plays with personal projects; has personal github; has personal domain; etc.',
    description: 'tbd',
    weight: 1, 
    id: 'personal-projects',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Has experience with different architectures (Angluar, React, etc.)',
    description: 'tbd',
    weight: 1, 
    id: 'different-architectures',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: `"Fluent" in GroupBy's Architecture`,
    description: 'tbd',
    weight: 1, 
    id: 'gbi',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Contributes ideas to architectural discussion and design. ',
    description: 'tbd',
    weight: 1, 
    id: 'contributes-to-architecture',
  },
  {
    type: QUESTION_TYPES.BOOLEAN,
    title: 'Has created/worked on the construction of a framework',
    description: 'tbd',
    weight: 1, 
    id: 'created-framework',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Understands and consistently adheres to architecture designed to avoid repetitious code',
    description: 'tbd',
    weight: 1, 
    id: 'do-not-repeat-yourself',
  },
];