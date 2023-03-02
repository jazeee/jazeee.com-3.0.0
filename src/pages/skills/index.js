import React from "react";
import { Layout } from "../../components/layout";
import { SEO } from "../../components/seo";
import styles from "./skills.module.css";
import { skills } from "../../data/utils";
import { TargetBlankLink } from "../../components/target-blank-link";
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
          <TargetBlankLink href="http://goo.gl/qWsPm">Resume</TargetBlankLink>
        </Typography>
      </div>
    </div>
  </div>
);

const SkillsPage = () => (
  <Layout>
    <SEO title="Skills" />
    <Skills />
  </Layout>
);

export default SkillsPage;
