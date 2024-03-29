export interface ISideBarLink {
  name: string;
  path: string;
}

export const SIDE_BAR_PATHS: ISideBarLink[] = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Articles',
    path: '/posts',
  },
  {
    name: 'Github Projects',
    path: '/software-projects/all-github-projects',
  },
  {
    name: 'Skill Plots',
    path: '/skills-plots',
  },
  {
    name: 'Publications',
    path: '/publications',
  },
  {
    name: 'Presentations',
    path: '/presentations',
  },
];

export const SIDE_BAR_URLS: ISideBarLink[] = [
  {
    name: 'Resume',
    path: 'https://goo.gl/qWsPm',
  },
  {
    name: 'LinkedIn',
    path: 'https://www.linkedin.com/in/jazeee',
  },
  {
    name: 'Github',
    path: 'https://github.com/jazeee',
  },
  {
    name: 'Recommendations',
    path: 'https://www.linkedin.com/in/jazeee/details/recommendations',
  },
];
