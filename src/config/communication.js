import { QUESTION_TYPES } from "../constants";

export const COMMUNICATION = [
  {
    type: QUESTION_TYPES.AGREE,
    title: 'Able to communicate with coworkers',
    description: [
      'Is able to communicate with collegues in a responsible and productive fashion.',
      'Is able to adjust communcation style to best interact with the individual that they are interacting with.',
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
      'Communicates when will not be available.',
      'Takes care to overcommunicate and ensure availability when working offsite.',
      'Does not regularily disapear for long or frequent periods during the workday.',
    ],
    weight: 1, 
    id: 'core-hours',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: 'Client Communcation',
    description: [
      'Is able to communcate to clients in a professional and respectful manner.',
      'Is an excellent embassador for the GBI brand when communicating with clients.',
      'Is able to diffuse potentially volatile situations.',
      'Is able to clearly communicate bad news to the client without confrontation.',
      'Completely avoid letting personal hang up impact client interaction.',
    ],
    weight: 1, 
    id: 'clients',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: 'Deliver Criticism',
    description: [
      'Feels comfortable delivering criticism to peers.',
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
      'Is able to present to peers in meeting format.',
      'Is able to craft and deliver a pitch to either familiar or unfamiliar audiences.',
      'Is able to craft education content such as a lunch & learn and deliver that content in a consise and approachable format.',
    ],
    weight: 1, 
    id: 'present-to-group',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: 'Project Trajectory',
    description: [
      'Is able to communicate that a project has veered off course to all stakeholders.',
      'Is solution oriented in regards to projects that have veered off course.',
      'Does not panic when a project has become critically off course.',
    ],
    weight: 1, 
    id: 'project-off-course',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: 'JIRA Management',
    description: [
      'Reliably updated task to ensure accuracy.',
      'Reliably provides time updated in regards to effort invested and time remaining.',
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
      'Is willing a willing and reliable support resource while on rotation.',
    ],
    weight: 1, 
    id: 'outside-work-hours',
  },
  {
    type: QUESTION_TYPES.AGREE,
    title: 'Documations',
    description: [
      'Is able to write descriptive and effective code comments to provide context to confusing code.',
      'Is able to write clear and easily understood documentation designed for non technical clients and customers.',
      'Is able to create concise documantions to share common practice, process, or bahviour.',
    ],
    weight: 1, 
    id: 'docs',
  },
];