// Centralizamos os dados para facilitar a manutenção futura sem mexer no código
export const siteContent = {
  hero: {
    title: "André Monteiro",
    subtitle: "Desenvolvedor Front-end & UI Designer",
    description: "Criando experiências digitais únicas e funcionais.",
    image: "/1.07MB_banner.webp", // Caminho baseado na pasta public
  },
  about: {
    title: "Sobre Mim",
    text: "Sou um desenvolvedor apaixonado por criar interfaces que unem estética e usabilidade...",
  },
  skills: [
    { name: "React/Next.js", level: "Avançado" },
    { name: "JavaScript (ES6+)", level: "Avançado" },
    { name: "CSS/Tailwind/Modules", level: "Avançado" },
    { name: "UI/UX Design", level: "Intermediário" },
  ],
  projects: [
    {
      id: 1,
      title: "Agência de Viagens",
      category: "Landing Page",
      image: "/1.71MB_site_viagens.webp",
      link: "#",
    },
    {
      id: 2,
      title: "Restaurante Gourmet",
      category: "Web App",
      image: "/1.36MB_restaurante.webp",
      link: "#",
    },
    {
      id: 3,
      title: "Agência de Design",
      category: "Institucional",
      image: "/1.29MB_agencia_design.webp",
      link: "#",
    },
  ],
  social: {
    linkedin: "https://linkedin.com/in/seu-usuario",
    github: "https://github.com/seu-usuario",
    whatsapp: "https://wa.me/5511988844661",
  }
};