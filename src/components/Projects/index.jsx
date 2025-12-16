import Image from 'next/image';
import styles from './Projects.module.css';
import { siteContent } from '../../data/content';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="title">Projetos Selecionados</h2>
        
        <div className={styles.grid}>
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
                  <a href={project.link} className={styles.viewBtn}>Ver Projeto</a>
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