import styles from './Contact.module.css';
import { siteContent } from '@/data/content';
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export default function Contact() {
  const { social } = siteContent;

  return (
    <section id="contact" className={`section ${styles.contactSection}`}>
      <div className="container">
        <div className={styles.wrapper}>
          <h2 className="title">Vamos trabalhar juntos?</h2>
          <p className={styles.description}>
            Estou sempre aberto a novas oportunidades e desafios. 
            Entre em contato para discutirmos seu próximo projeto.
          </p>

          <div className={styles.links}>
            <a 
              href={social.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${styles.btn} ${styles.whatsapp}`}
            >
              <FaWhatsapp />
              WhatsApp
            </a>
            <a 
              href={social.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${styles.btn} ${styles.linkedin}`}
            >
              <FaLinkedin />
              LinkedIn
            </a>
            <a 
              href={social.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${styles.btn} ${styles.github}`}
            >
              <FaGithub />
              GitHub
            </a>
          </div>
          
          <footer className={styles.footer}>
            <p>&copy; {new Date().getFullYear()} André Monteiro. Todos os direitos reservados.</p>
          </footer>
        </div>
      </div>
    </section>
  );
}