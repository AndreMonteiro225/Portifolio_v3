// Centralizamos os dados para facilitar a manutenção futura sem mexer no código
export const siteContent = {
  hero: {
    title: "André Monteiro",
    subtitle: "Desenvolvedor Full-Stack & UI Designer",
    description: "Especializado em Gestão de tráfego e em experiências digitais únicas.",
    image: "/9.96MB_hero_SEO.webp", // Caminho baseado na pasta public
  },
  about: {
    title: "Sobre Mim",
    text: "Sou um desenvolvedor apaixonado por criar interfaces que unem estética e usabilidade...",
  },
  skills: [
    { name: "React/Next.js"},
    { name: "JavaScript (ES6+)"},
    { name: "CSS/Modules"},
    { name: "UI/UX Design"},
    { name: "git/GitHub"},
    { name: "Node.js"},
    { name: "SQL/MySQL"},
    { name: "Google Ads" },
    { name: "Meta Ads" },
    { name: "SEO" },
  ],
  projects: [
    {
      id: 1,
      title: "Barbearia do Johnny",
      category: "Landing Page | Ranqueamento no google e gestão de tráfego",
      image: "/print_screen_barbearia.webp.webp",
      link: "https://barbeariadojohnny.com.br/",
    },
    {
      id: 2,
      title: "Topoleasing",
      category: "Site informativo com contato",
      image: "/topoleasing_img.webp",
      link: "https://topoleasing.vercel.app/",
    },
    {
      id: 3,
      title: "Restaurante Gourmet",
      category: "Cardápio Online",
      image: "/1.36MB_restaurante.webp",
      link: "https://cardapio-para-restaurante.vercel.app/",
    },
    {
      id: 4,
      title: "Agência de Design",
      category: "Landing page simples",
      image: "/1.29MB_agencia_design.webp",
      link: "https://agencia-design-digital-mu.vercel.app/",
    },
    {
      id: 5,
      title: "Sorveteria Delícia Gelada",
      category: "Landing page simples",
      image: "/269KB_sorveteria.webp",
      link: "https://spa-sorveteria-iota.vercel.app/",
    },
  ],

  social: {
    linkedin: "https://www.linkedin.com/in/andr%C3%A9-monteiro-rachel-3a0429240/",
    github: "https://github.com/AndreMonteiro225",
    whatsapp: "https://wa.me/5511988844661",
  }
};