import { HTML } from './html';
import { CSS } from './css';
import { JS } from './js';
import { GIT } from './git';
import { MISC_DEV } from './misc-dev';
import { CAREER } from './career';
import { ARCHITECTURE } from './architecture';
import { COMMUNICATION } from './communication';
import { RELIABILITY } from './reliability';
import { ACCOUNTABILITY } from './accountability';
import { CONFIDENCE } from './confidence';
import { ATTN_TO_DETAIL } from './attn-to-detail';
import { LEADERSHIP } from './leadership';
import { SELF_SUFFICIENCY } from './self-sufficiency';

import { TITLES } from './titles';

export const CONFIG = {
  constants: {
    MAX_SCORE: 1000,
  },
  titles: TITLES,
  categories: {
    'career': {
      label: 'Career',
      weight: 1,
      questions: CAREER,
    },
    'html': {
      label: 'HTML',
      weight: 1,
      questions: HTML,
    },
    'css': {
      label: 'CSS/SCSS',
      weight: 2,
      questions: CSS,
    },
    'js': {
      label: 'Javascript',
      weight: 3,
      questions: JS,
    },
    'git': {
      label: 'GIT/GitHub',
      weight: 2,
      questions: GIT,
    },
    'misc-dev': {
      label: 'Misc Dev',
      weight: 3,
      questions: MISC_DEV,
    },
    'architecture': {
      label: 'Architecture',
      weight: 2,
      questions: ARCHITECTURE,
    },
    'communication': {
      label: 'Communication',
      weight: 3,
      questions: COMMUNICATION,
    },
    'reliability': {
      label: 'Reliability',
      weight: 2,
      questions: RELIABILITY,
    },
    'accountability': {
      label: 'Accountability',
      weight: 2,
      questions: ACCOUNTABILITY,
    },
    'confidence': {
      label: 'Confidence',
      weight: 2,
      questions: CONFIDENCE,
    },
    'attn-to-detail': {
      label: 'Attention to Detail',
      weight: 2,
      questions: ATTN_TO_DETAIL,
    },
    'leadership': {
      label: 'Leadership',
      weight: 2,
      questions: LEADERSHIP,
    },
    'self-sufficiency': {
      label: 'Self-sufficiency',
      weight: 2,
      questions: SELF_SUFFICIENCY,
    },
  },
};