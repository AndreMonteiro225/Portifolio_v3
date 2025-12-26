import styles from './aboutSeoPage.module.css';
import Header from '../../components/Header';
import { siteContent } from '../../data/content';

// Server Component
export default function aboutSeoPage() {
  const { hero, pillars, differential } = siteContent.aboutSeoPage;

  return (
    <main className={styles.pageWrapper}>
      <Header />
      
      <div className={`container ${styles.container}`}>
        
        {/* Seção Hero/Intro */}
        <section className={styles.heroSection}>
          <h1 className={styles.mainTitle}>{hero.title}</h1>
          <div className={styles.introWrapper}>
            {hero.intro.map((paragraph, index) => (
              <p key={index} className={index === hero.intro.length - 1 ? `${styles.introText} ${styles.introHighlight}` : styles.introText}>
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Pilares */}
        <div className={styles.pillarsGrid}>
          {pillars.map((pillar) => (
            <article key={pillar.id} className={styles.pillarCard}>
              <h2 className={styles.pillarTitle}>{pillar.title}</h2>
              <p className={styles.pillarContent}>{pillar.content}</p>
              
              <div className={styles.highlightsWrapper}>
                {pillar.highlights.map((highlight, idx) => (
                  <div key={idx} className={styles.highlightBox}>
                    <span className={styles.highlightLabel}>{highlight.label}</span>
                    <p className={styles.highlightText}>{highlight.text}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Diferencial */}
        <section className={styles.differentialSection}>
          <h2 className={styles.diffTitle}>{differential.title}</h2>
          <p className={styles.diffContent}>{differential.content}</p>
          <span className={styles.noiseElimination}>{differential.highlight}</span>
          
          <h3 className={styles.listTitle}>{differential.listTitle}</h3>
          <ul className={styles.featuresList}>
            {differential.list.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          
          <p className={styles.finalConclusion}>{differential.conclusion}</p>
        </section>

      </div>
    </main>
  );
}