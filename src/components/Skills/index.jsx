import styles from './Skills.module.css';
import { siteContent } from '../../data/content';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="title">Habilidades</h2>
        
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