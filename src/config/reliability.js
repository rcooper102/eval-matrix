import { QUESTION_TYPES } from "../constants";

export const RELIABILITY = [
  {
    type: QUESTION_TYPES.AGREE,
    title: 'Timeliness',
    description: [
      'Reliably is on time.',
      'Can be trusted to arrive at work at a reasonable time and stay for the whole day.',
    ],
    weight: 1,
    id: 'on-time',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: 'Task Timeliness',
    description: [
      'Is able to complete tasks on time, reliably.',
      'Quickly communicates timeline creep if a task expands in scope or was insufficiently estimated.',
      'Actively takes innitiative to correct wayward timelines without need to be babysat.',
      'Is able to take advantage of opprtunities to finish tasks ahead of time without compromising quality.',
    ],
    weight: 1,
    id: 'complete-tasks-on-time',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: 'Ownership',
    description: [
      'Eager to take ownership of projects, tasks, and initiatives and ensure their success.',
    ],
    weight: 1,
    id: 'ownership-of-code',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: 'Distractions',
    description: [
      'Does not regularily distract collegues during the work day in a way the negatively impacts productivity.',
      'Takes steps to avoid being distracted by other activities happening around the office.',
      'Does not let social media or other non related tasks negatively impact productivity or timelines.',
    ],
    weight: 1,
    id: 'distractions',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: `Context Switching`,
    description: 'Is comfortable needing to rapidly context switch throughout the day with minimal loss in velocity.',
    weight: 1,
    id: 'context-switching',
  },
];
