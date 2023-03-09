import { ISkillDatum, SKILL_DATA } from "./skillsData";
import { pickBy, keys, sortBy, find } from "lodash";

export const START_YEAR = 2014;

interface ISkillDatumWithScore extends ISkillDatum {
  name: string;
  score: number;
}
interface IGetSkillDataOptions {
  minimumYearToInclude?: number;
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
    for (let name in SKILL_DATA) {
      const datum = SKILL_DATA[name];
      const skill = { name, ...datum, score: this.getSkillScore(datum) };
      this.data.push(skill);
      latestYear = Object.keys(skill.experience)
        .map(year => +year)
        .reduce((memo, year) => Math.max(memo, year), latestYear);
    }
    this.latestYear = latestYear;
    this.skillTypes = Object.values(SKILL_DATA).map(
      ({ type: skillType }) => skillType
    );
    this.skillTypes = [
      "Language",
      "Platform",
      "Database",
      "Environment",
      "Source Control",
      "Project Management",
      ...this.skillTypes,
    ];
    this.skillTypes = this.skillTypes.filter(
      (item, index, array) => array.indexOf(item) === index
    );
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

  getSkillData = (skillType: string, options: IGetSkillDataOptions = {}) => {
    const { minimumYearToInclude } = options;
    let skillData = SKILL_DATA;
    if (minimumYearToInclude) {
      skillData = Object.keys(skillData).reduce((accum, skill) => {
        const skillDatum = skillData[skill];
        const { experience } = skillDatum;
        const filteredExperience: Record<number, number> = {};
        Object.keys(experience)
          .map(Number)
          .filter(year => year >= minimumYearToInclude)
          .forEach(year => (filteredExperience[year] = experience[year]));
        accum[skill] = {
          ...skillDatum,
          experience: filteredExperience,
        };
        return accum;
      }, {} as Record<string, ISkillDatum>);
    }
    if (skillType != null) {
      skillData = pickBy(skillData, function(skill) {
        return skill.type === skillType;
      });
    }
    return skillData;
  };

  getSkillYearScore = (year: number, skillLevel: number, scoreWeight: number | undefined) => {
    if (scoreWeight == null) {
      scoreWeight = 1;
    }
    return (
      Math.max(0.5, year - (this.latestYear - 3)) * skillLevel * scoreWeight
    );
  };

  getSkillScore = (skill: ISkillDatum) => {
    let score = 0;
    const { experience } = skill;
    for (let year in experience) {
      const skillLevel = experience[year];
      score += this.getSkillYearScore(Number(year), skillLevel, skill.scoreWeight);
    }
    return score;
  };

  getDomainSkills = (skillDomain: string) => {
    let skills = this.data.filter(skill => {
      return skill.domains.includes(skillDomain);
    });
    skills = sortBy(skills, this.getSkillScore);
    return skills.reverse();
  };

  getSkills = (skillType: string) => {
    const skills = [];
    let index = 0;
    for (let skillName in SKILL_DATA) {
      const skill = SKILL_DATA[skillName];
      const { type } = skill;
      if (skillType == null || skillType === type) {
        const { experience } = skill;
        for (let year in experience) {
          const skillLevel = experience[year];
          skills.push({
            skillName,
            year,
            skillLevel,
            type,
            index,
          });
          index++;
        }
      }
    }
    return skills;
  };
}

export const skills = new Skills();
