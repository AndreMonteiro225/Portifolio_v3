'use client';
import Image from 'next/image';
import { useRef } from 'react';
import useOnScreen from '../../hooks/useOnScreen';
import styles from './Projects.module.css';
import { siteContent } from '../../data/content';

export default function Projects() {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  return (
    <section id="projects" className={`${styles.projects} ${styles.section}`} ref={ref}>
      <div className="container">
        <h2 className="title">Alguns de meus projetos</h2>
        
        <div className={`${styles.grid} ${isVisible ? styles.visible : ''}`}>
          {siteContent.projects.map((project) => (
            <article key={project.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className={styles.overlay}>
                  <a href={project.link} target="_blank" className={styles.viewBtn}>Ver Projeto</a>
                </div>
              </div>
              <div className={styles.info}>
                <span className={styles.category}>{project.category}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}