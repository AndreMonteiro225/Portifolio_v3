import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import styles from './page.module.css';

// Server Component (Padrão no App Router)
// Renderiza a estrutura principal da página
export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}