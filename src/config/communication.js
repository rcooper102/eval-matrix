import { QUESTION_TYPES } from "../constants";

export const COMMUNICATION = [
  {
    type: QUESTION_TYPES.AGREE,
    title: 'Able to Communicate With Coworkers',
    description: [
      'Is able to communicate with colleagues in a responsible and productive fashion.',
      'Is able to adjust communication style based on context, interpersonal dynamics, or other factors.',
      'Does not contribute negative energy to other team members.',
      'Is able to tactfully and gracefully navigate difficult topics without escalation.',
    ],
    weight: 1,
    id: 'coworkers',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: 'Available During Work Hours',
    description: [
      'Is accessible during core work hours most of the time.',
      'Clearly communicates cases where they will not be available, including: appointments; unexpected delays; mornings or afternoons off; etc.',
      'Takes care to over communicate and ensure availability when working offsite.',
      'Does not regularly disappear for long or frequent periods during the workday.',
    ],
    weight: 1,
    id: 'core-hours',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: 'Client Communication',
    description: [
      'Is able to communicate with clients in a professional and respectful manner.',
      'Is able to have difficult conversations with clients, such as in cases where a deadline was missed or a feature did not work as expected.',
      'Is able to diffuse potentially volatile situations.',
      'Is able to reassure and build trust with the client.',
      'Is able to clearly and effectively communicate what is and is not possible in a given timeframe.',
      'Is an excellent ambassador for the GBI brand when communicating with clients.',
      'Is able to put aside personal/interpersonal issues when interacting with clients',
    ],
    weight: 1,
    id: 'clients',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: 'Deliver Criticism',
    description: [
      'Feels comfortable delivering feedback to peers.',
      'Is able to deliver constructive criticism designed to inspire rather than cause harm.',
      'Does not criticise in a way that would invoke shame.',
    ],
    weight: 1,
    id: 'deliver-criticism',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: 'Group Speaking',
    description: [
      'Is able to present to peers in a meeting format.',
      'Is able to craft and deliver a pitch to either familiar or unfamiliar audiences.',
      'Is able to craft educational content (such as a lunch & learn) and deliver that content in a concise and approachable format.',
    ],
    weight: 1,
    id: 'present-to-group',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: 'Project Trajectory',
    description: [
      'Is able to communicate that a project has veered off course to all stakeholders.',
      'Is able to identify and communicate strategies/solutions for correcting a project\'s trajectory.',
      'Is able to remain calm and clear headed when a project has gone critically off course.',
    ],
    weight: 1,
    id: 'project-off-course',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: 'JIRA Management',
    description: [
      'Reliably updates tasks with additional details and comments to ensure accuracy.',
      'Reliably provides time related updates, including time invested and time remaining.',
      'Is able to create complete and descriptive stories that communicate all requirements of a given task.',
    ],
    weight: 1,
    id: 'write-ticket',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: 'Evenings and Weekends',
    description: [
      'Is diligent in being able to address unexpected fires outside of normal work hours.',
      'Is available (within reason) as a resource during a crisis.',
      'Is a willing and reliable support resource while on rotation.',
    ],
    weight: 1,
    id: 'outside-work-hours',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: 'Documation',
    description: [
      'Is able to write descriptive and effective code comments to provide context where required.',
      'Is able to write clear and easily understood documentation designed for non technical clients and customers.',
      'Is able to create concise and compelling documentation for the purpose of sharing common practices, processes, or patterns.',
      'Maintains documentation to ensure that it remains accurate.'
    ],
    weight: 1,
    id: 'docs',
  },
];
