import styles from './Skills.module.css';
import { siteContent } from '../../data/content';

export default function Skills() {
  return (
    <section id="skills" className={`section ${styles.section} ${styles.skillsSection}`}>
      <div className="container">
        <div className={styles.header}>
        <h2 className="title">Habilidades</h2>
        </div>
        
        <div className={styles.grid}>
          {siteContent.skills.map((skill, index) => (
            <div key={index} className={styles.skillCard}>
              <span className={styles.skillName}>{skill.name}</span>
              <span className={styles.skillLevel}>{skill.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}