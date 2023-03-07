import React from "react";
import * as styles from "./skills.module.css";
import { skills } from "../../data/utils";
import { ExternalLink } from "../ExternalLink";
import Typography from "@mui/material/Typography";

const webAppSkillNames = skills
  .getDomainSkillNames("Software Engineering")
  .filter((skill, index) => index < 12);

export const Skills = () => (
  <div className={styles.aboutJaz}>
    <div className={styles.container}>
      <div className={styles.skillsHeaderOverlay}>
        <Typography variant="h5">Full Stack Web Developer</Typography>
        <Typography variant="subtitle1">
          Primary Developer Skills (Sorted by skill level)
        </Typography>
        <ul>
          {webAppSkillNames.map(skillName => (
            <li key={skillName}>
              <Typography variant="body2">{skillName}</Typography>
            </li>
          ))}
        </ul>
        <Typography variant="h6">
          <ExternalLink href="http://goo.gl/qWsPm">Resume</ExternalLink>
        </Typography>
      </div>
    </div>
  </div>
);
