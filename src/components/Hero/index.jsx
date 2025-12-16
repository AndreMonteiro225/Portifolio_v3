import Image from 'next/image';
import styles from './Hero.module.css';
import { siteContent } from '@/data/content';

export default function Hero() {
  const { title, subtitle, description, image } = siteContent.hero;

  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <div className={styles.textContent}>
          <h2 className={styles.subtitle}>{subtitle}</h2>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
          
          <div className={styles.actions}>
            <a href="#projects" className={styles.primaryBtn}>Ver Projetos</a>
            <a href="#contact" className={styles.secondaryBtn}>Entrar em Contato</a>
          </div>
        </div>
        
        <div className={styles.imageWrapper}>
           {/* Priority true é crucial para o LCP (Largest Contentful Paint) no Hero */}
          <Image 
            src={image} 
            alt={`Banner de ${title}`}
            width={600}
            height={600}
            priority
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}