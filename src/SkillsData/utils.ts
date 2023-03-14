import { pickBy, sortBy } from 'lodash';

import { ISkillDatum, SKILL_DATA } from './skillsData';

export const START_YEAR = 2013;

interface ISkillDatumWithScore extends ISkillDatum {
  skillName?: string;
  name: string;
  score: number;
}
interface IGetSkillDataOptions {
  minimumYearToInclude?: number;
}

export function getSkillData(skillType: string, options: IGetSkillDataOptions = {}) {
  const { minimumYearToInclude } = options;
  let skillData = SKILL_DATA;
  if (minimumYearToInclude) {
    skillData = Object.keys(skillData).reduce((accum, skill) => {
      const skillDatum = skillData[skill];
      const { experience } = skillDatum;
      const filteredExperience: Record<number, number> = {};
      Object.keys(experience)
        .map(Number)
        .filter((year) => year >= minimumYearToInclude)
        .forEach((year) => {
          filteredExperience[year] = experience[year];
        });
      return {
        ...accum,
        [skill]: {
          ...skillDatum,
          experience: filteredExperience,
        },
      };
    }, {} as Record<string, ISkillDatum>);
  }
  if (skillType) {
    skillData = pickBy(skillData, (skill) => {
      return skill.type === skillType;
    });
  }
  return skillData;
}

export class Skills {
  data: ISkillDatumWithScore[];

  latestYear: number;

  skillTypes: string[];

  skillDomains: string[];

  skillNames: string[];

  skillIndex: Record<string, number>;

  constructor() {
    this.data = [];
    let latestYear = START_YEAR;
    Object.keys(SKILL_DATA).forEach((name) => {
      const datum = SKILL_DATA[name];
      const skill: ISkillDatumWithScore = { name, ...datum, score: this.getSkillScore(datum) };
      this.data.push(skill);
      latestYear = Object.keys(skill.experience)
        .map((year) => +year)
        .reduce((memo, year) => Math.max(memo, year), latestYear);
    });
    this.latestYear = latestYear;
    this.skillTypes = Object.values(SKILL_DATA).map(({ type: skillType }) => skillType);
    this.skillTypes = [
      'Language',
      'Platform',
      'Database',
      'Environment',
      'Source Control',
      'Project Management',
      ...this.skillTypes,
    ];
    this.skillTypes = this.skillTypes.filter((item, index, array) => array.indexOf(item) === index);
    this.skillDomains = Object.values(SKILL_DATA)
      .map(({ domains }) => domains)
      .reduce((memo, domains) => [...memo, ...domains], []);
    this.skillDomains = this.skillDomains.filter(
      (item, index, array) => array.indexOf(item) === index
    );
    this.skillNames = Object.keys(SKILL_DATA).sort();
    this.skillIndex = {};
    this.skillNames.forEach((skillName, index) => {
      this.skillIndex[skillName] = index;
    });
  }

  getRecentSkillYearScore = (year: number, skillLevel: number, scoreWeight: number | undefined) => {
    return Math.max(0.5, year - (this.latestYear - 3)) * skillLevel * (scoreWeight ?? 1);
  };

  getSkillScore = (skill: ISkillDatum) => {
    let score = 0;
    const { experience, scoreWeight } = skill;
    Object.keys(experience).forEach((key) => {
      const year = Number(key);
      const skillLevel = experience[year];
      score += this.getRecentSkillYearScore(year, skillLevel, scoreWeight);
    });
    return score;
  };

  getDomainSkills = (skillDomain: string) => {
    let skills = this.data.filter((skill) => {
      return skill.skillIsCurrent && skill.domains.includes(skillDomain);
    });
    skills = sortBy(skills, this.getSkillScore);
    return skills.reverse();
  };
}

export const skills = new Skills();
