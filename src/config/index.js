import { HTML } from './html';
import { CSS } from './css';
import { JS } from './js';
import { GIT } from './git';
import { MISC_DEV } from './misc-dev';
import { CAREER } from './career';
import { ARCHITECTURE } from './architecture';
import { COMMUNICATION } from './communication';
import { CONTRIBUTION } from './contribution';
import { RELIABILITY } from './reliability';
import { ACCOUNTABILITY } from './accountability';
import { CONFIDENCE } from './confidence';
import { ATTN_TO_DETAIL } from './attn-to-detail';
import { LEADERSHIP } from './leadership';

import { TITLES } from './titles';

export const CONFIG = {
  constants: {
    MAX_SCORE: 1000,
  },
  titles: TITLES,
  categories: {
    'career': {
      label: 'Career',
      weight: 2,
      questions: CAREER,
    },
    'contribution': {
      label: 'Contribution',
      weight: 3,
      questions: CONTRIBUTION,
    },
    'html': {
      label: 'HTML',
      weight: 2,
      questions: HTML,
    },
    'css': {
      label: 'CSS/SCSS',
      weight: 3,
      questions: CSS,
    },
    'js': {
      label: 'Javascript',
      weight: 5,
      questions: JS,
    },
    'git': {
      label: 'GIT/GitHub',
      weight: 3,
      questions: GIT,
    },
    'misc-dev': {
      label: 'Misc Dev',
      weight: 4,
      questions: MISC_DEV,
    },
    'architecture': {
      label: 'Architecture',
      weight: 5,
      questions: ARCHITECTURE,
    },
    'communication': {
      label: 'Communication',
      weight: 5,
      questions: COMMUNICATION,
    },
    'reliability': {
      label: 'Reliability',
      weight: 4,
      questions: RELIABILITY,
    },
    'accountability': {
      label: 'Accountability',
      weight: 3,
      questions: ACCOUNTABILITY,
    },
    'confidence': {
      label: 'Confidence',
      weight: 3,
      questions: CONFIDENCE,
    },
    'attn-to-detail': {
      label: 'Attention to Detail',
      weight: 4,
      questions: ATTN_TO_DETAIL,
    },
    'leadership': {
      label: 'Leadership',
      weight: 3,
      questions: LEADERSHIP,
    },
  },
};