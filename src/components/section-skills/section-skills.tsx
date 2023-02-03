import styles from './section-skills.module.css';
import cx from 'classnames';
import { SkillsContent } from '../skills-content/skills-content';

export function SectionSkills() {
    return  (
        <section className={cx(styles.skills, styles.wrap, styles.section)} id="skills">
                  <h3 className={styles.skills_title}>Skills</h3>
                  <p className={styles.skills_subtitle}>I work in such programs as</p>
                  <div className={styles.skills_grid}>
                    <SkillsContent programmImageUrl='./ps.jpg' description='Adobe Photoshop' scoreImageUrl='./most_stars.svg'></SkillsContent>
                    <SkillsContent programmImageUrl='./ai.png' description='Adobe Illustrator' scoreImageUrl='./ai_stars.svg'></SkillsContent>
                    <SkillsContent programmImageUrl='./ae.png' description='Adobe After Effects' scoreImageUrl='./most_stars.svg'></SkillsContent>
                      <div className={cx(styles.figma, styles.cell)}>
                          <img className={styles.skill_pic_f} src="./figma.jpg" alt="figma" />
                          <p className={styles.describe}>Figma</p>
                          <img src="./most_stars.svg" alt="" className={styles.skills_score_f} />
                      </div>
                  </div>
              </section>
    )
}