import { SKILL_DATA } from "./skill-data";
import { pickBy, keys, sortBy, find } from "lodash";
import { getColor } from "../utils/colors";

export class Skills {
  constructor() {
    this.data = [];
    let latestYear = 2012;
    for (let name in SKILL_DATA) {
      const skill = { name, ...SKILL_DATA[name] };
      this.data.push(skill);
      latestYear = Object.keys(skill.experience)
        .map(year => +year)
        .reduce((memo, year) => Math.max(memo, year), latestYear);
      skill.score = this.getSkillScore(skill);
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
    this.skillColors = {};
    this.skillNames.forEach((skillName, index) => {
      this.skillColors[skillName] = getColor(index);
      this.skillIndex[skillName] = index;
    });
  }

  getSkillData = (skillType, options = {}) => {
    const { minimumYearToInclude } = options;
    let skillData = SKILL_DATA;
    if (minimumYearToInclude) {
      skillData = Object.keys(skillData).reduce((accum, skill) => {
        const skillDatum = skillData[skill];
        const { experience } = skillDatum;
        const filteredExperience = {};
        Object.keys(experience)
          .filter(year => year >= minimumYearToInclude)
          .forEach(year => (filteredExperience[year] = experience[year]));
        accum[skill] = {
          ...skillDatum,
          experience: filteredExperience,
        };
        return accum;
      }, {});
    }
    if (skillType != null) {
      skillData = pickBy(skillData, function(skill) {
        return skill.type === skillType;
      });
    }
    return skillData;
  };

  getSkillNames = skillType => {
    let skillNames = keys(this.getSkillData(skillType));
    skillNames = sortBy(skillNames, skillName => {
      let skill = find(this.data, function(datum) {
        return datum.name === skillName;
      });
      return this.getSkillScore(skill);
    });
    return skillNames.reverse();
  };

  getSkillYearScore = (year, skillLevel, scoreWeight) => {
    if (scoreWeight == null) {
      scoreWeight = 1;
    }
    return (
      Math.max(0.5, year - (this.latestYear - 6)) * skillLevel * scoreWeight
    );
  };

  getSkillScore = skill => {
    let score = 0;
    const { experience } = skill;
    for (let year in experience) {
      const skillLevel = experience[year];
      score += this.getSkillYearScore(year, skillLevel, skill.scoreWeight);
    }
    return score;
  };

  getDomainSkills = skillDomain => {
    let skills = this.data.filter(skill => {
      return skill.domains.includes(skillDomain);
    });
    skills = sortBy(skills, this.getSkillScore);
    return skills.reverse();
  };

  getSkills = skillType => {
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

  getDomainSkillNames = skillDomain => {
    return this.getDomainSkills(skillDomain).map(({ name }) => name);
  };
}

export const skills = new Skills();
