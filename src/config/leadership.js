import { QUESTION_TYPES } from "../constants";

export const LEADERSHIP = [
  {
    type: QUESTION_TYPES.AGREE,
    title: `Helping Teammates`,
    description: [
      'Is eager to help teammates when needed.',
      'Is responsible about timeboxing help in order to avoid impacting productivity.',
    ],
    weight: 1, 
    id: 'helps-teammates',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: `Steps Forward`,
    description: 'Makes an effort to ensure that their opinion is heard during group discussions.',
    weight: 1, 
    id: 'speaks-up',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: `Takes Initiative`,
    description: [
      'Able to run with an idea and produce output.',
      'Makes an effort to spearhead new initiative of value for the company.',
    ],
    weight: 1, 
    id: 'run-with-idea',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: `Crisis`,
    description: [
      'Is able to remain level headed during a crisis and help collegues move forward in a solution oriented manner.',
      'Does not escalate a crisis by introducing unnecessary stress.',
    ],
    weight: 1, 
    id: 'stress',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: `Team Context`,
    description: 'Strong awareness of the context of other developers on the team and able to leverage that knowledge to help mitigate risk.',
    weight: 1, 
    id: 'team-context',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: `Collegue Failure`,
    description: 'Works to help other team members transform moments of failure or shame into education and growth.',
    weight: 1, 
    id: 'team-failure',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: `Interviews`,
    description: 'Able to lead an interview and effectively evaluation a candidate based on relevant factors while ignoring irrelevant discriminations.',
    weight: 1, 
    id: 'interview',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: `Difficult Subjects`,
    description: 'Willingness to broach difficult or uncomfortable discussions in an effective way with appropriate timing and context.',
    weight: 1, 
    id: 'difficult-topics',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: `Termination`,
    description: 'Is comfortable terminating employment of a subordinate when necessary.',
    weight: 1, 
    id: 'terminating-employment',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: `Company Culture`,
    description: 'Takes action to contribute to and protect a positive culture within the company.',
    weight: 1, 
    id: 'culture',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: `Mediation`,
    description: 'Is able to help mediate conflict between other members of the team in order to work towards a positive outcome.',
    weight: 1, 
    id: 'mediation',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: `Company Health`,
    description: 'Prioritizes the health of the company and recognizes that personal success will always be closesly tied to company success`,',
    weight: 1, 
    id: 'company-health',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: `Value`,
    description: 'Actively takes steps to expand skillset and value to the company.',
    weight: 1, 
    id: 'expands-value',
  },
];