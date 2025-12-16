import styles from './About.module.css';
import { siteContent } from '@/data/content';

export default function About() {
  const { title, text } = siteContent.about;

  return (
    <section id="about" className="section">
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h2 className="title">{title}</h2>
          <div className={styles.textWrapper}>
            {/* Renderiza parágrafos se for um array, ou texto simples */}
            <p className={styles.text}>{text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}