import Image from 'next/image';
import styles from './Hero.module.css';
import { siteContent } from '@/data/content';
import Link from 'next/link';
import { GoProjectSymlink } from "react-icons/go";
import { RiContactsBook3Line } from "react-icons/ri";
import { FaRegQuestionCircle } from "react-icons/fa";


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
            <Link href="/aboutSeoPage" className={styles.primaryBtn}>Por que meu trabalho é valioso para o seu negócio? <div className={styles.iconContainer}><FaRegQuestionCircle /></div></Link>
            <Link href="#projects" className={styles.secondaryBtn}>Ver Projetos<div className={styles.iconContainer}><GoProjectSymlink/></div></Link>
            <Link href="#contact" className={styles.secondaryBtn}>Entrar em Contato<div className={styles.iconContainer}><RiContactsBook3Line /></div></Link>
          </div>
        </div>
        
        <div className={styles.imageWrapper}>
           
          <Image 
            src={image} 
            alt={`Banner de ${title}`}
            width={600}
            height={600}
            priority
            quality={75}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}