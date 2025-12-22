import styles from './About.module.css';
import { siteContent } from '@/data/content';

export default function About() {
  const { title, text } = siteContent.about;

  return (
    <section id="about" className={`section ${styles.section} ${styles.aboutSection}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h2 className="title">{title}</h2>
          <div className={styles.textWrapper}>
            <p className={styles.text}>{text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}