import { QUESTION_TYPES } from "../constants";

export const ARCHITECTURE = [
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Design Patterns',
    description: [
      'Understands the purpose and application of MVC, MVVM, MV*, and why we separate business logic from presentation',
      'Understands the purpose and application of common design patterns such as: singleton; proxy; adapter; observer; visitor; and others.',
      'Understands the difference between event based design and promise base design and why both are valid and when.',
      'Is able to identify and correct known anti-patterns.',
    ],
    weight: 5,
    id: 'events',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Frameworks, Libraries, and Tools',
    description: [
      'Has experience with other well known JavaScript frameworks, such as: React; AngularJS; Angular; Vue; Ember; etc.',
      'Has experience working with statement management libraries, such as: Redux; Flux; MobX; etc.',
      'Is able to objectively communicate the benefits and downsides of various frameworks and related tools.',
      'Is able to leverage experience with a variety of architectures to aid in the creation of new and unique projects.',
    ],
    weight: 4,
    id: 'different-architectures',
  },
  {
    type: QUESTION_TYPES.SMALL_RANGE,
    title: `"Fluent" in GroupBy's Architecture`,
    description: [
      'Has worked on one or more StoreFront implementations.',
      'Has contributed to one or more StoreFront modules.',
      'Is deeply familiar with GroupBy\'s service offerings, including: Riot, Searchandiser; Wisdom; etc.',
      'Is deeply familiar with GroupBy\'s internal and client facing tools, such as: RefApp; Command Center; etc.',
    ],
    weight: 2,
    id: 'gbi',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Contributes Architecture',
    description: [
      'Is eager to make meaningful, well informed contributions to a given project\'s architecture.',
      'Is able to design flexible architectures by predicting future requirements.',
      'Is able to conceive of, discuss, and defend high level architectural decisions which have not yet been implemented.',
    ],
    weight: 3,
    id: 'contributes-to-architecture',
  },
  {
    type: QUESTION_TYPES.RANGE,
    title: 'Code Repetition',
    description: [
      'Understands and applies the DNRY/DRY philosophy to their own work.',
      'Is able to identify repetitious code in their own work, as well as the work of others.',
      'Is able to identify and strike a balance between terseness and verbosity.'
    ],
    weight: 5,
    id: 'do-not-repeat-yourself',
  },
];
