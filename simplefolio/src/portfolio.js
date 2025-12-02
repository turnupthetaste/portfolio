// simplefolio/src/portfolio.js

module.exports = {
  // Cabeçalho da página
  head: {
    title: 'Felipe Fernandes Corrêa | Desenvolvedor',
  },

  // Hero section
  hero: {
    title: 'Olá, meu nome é',
    name: 'Felipe Fernandes Corrêa',
    subtitle: 'Desenvolvedor Full Stack em formação na FATEC',
    cta: 'Saiba mais',
  },

  // Sobre
  about: {
    img: 'sua-foto.jpg', // salve a imagem na pasta 'public/images'
    paragraphOne: 'Sou estudante de Desenvolvimento de Software Multiplataforma pela FATEC.',
    paragraphTwo: 'Tenho interesse por desenvolvimento web full stack, boas práticas e usabilidade.',
    paragraphThree: 'Busco oportunidades para aplicar e expandir meus conhecimentos com Node.js, React, PostgreSQL e MongoDB.',
    resume: '', // opcional: link para currículo
  },

  // Projetos
  projects: [
    {
      id: 1,
      img: 'project.jpg',
      title: 'Projeto DSM-1 (Scrum)',
      info: 'Sistema de gerenciamento com Node.js, HTML/CSS/JS e banco PostgreSQL, feito com metodologia ágil Scrum.',
      url: 'https://github.com/TechWizards-Tech/DSM-1',
      repo: 'https://github.com/TechWizards-Tech/DSM-1',
    },
    {
      id: 2,
      img: 'project.jpg',
      title: 'NutriWizards',
      info: 'App para cálculo de necessidades calóricas com Node.js, React e PostgreSQL.',
      url: 'https://github.com/TechWizards-Tech/NutriWizards',
      repo: 'https://github.com/TechWizards-Tech/NutriWizards',
    },
    {
      id: 3,
      img: 'project.jpg',
      title: 'Wizard Winds',
      info: 'Monitor de navegação no Lago Furnas com atualizações via API, React, MongoDB e animações modernas com Tailwind e Framer Motion.',
      url: 'https://github.com/TechWizards-Tech/HALF-TECH---DSM-3',
      repo: 'https://github.com/TechWizards-Tech/HALF-TECH---DSM-3',
    },
    {
      id: 4,
      img: 'project.jpg',
      title: 'Tech Wizards DSM-4',
      info: 'Sistema completo desenvolvido na disciplina DSM-4, com backend robusto, integração com banco de dados e funcionalidades avançadas.',
      url: 'https://github.com/TechWizards-Tech/TECH-WIZARDS-DSM-4',
      repo: 'https://github.com/TechWizards-Tech/TECH-WIZARDS-DSM-4',
    },
  ],

  // Contato
  contact: {
    cta: 'Entre em contato para colaborações ou oportunidades!',
    btn: 'Fale comigo',
    email: 'seuemail@email.com', // troque pelo seu e-mail real
  },

  // Redes sociais (exibidas no rodapé)
  social: [
    {
      name: 'github',
      url: 'https://github.com/FelipeC84',
    },
    {
      name: 'linkedin',
      url: 'https://linkedin.com/in/seu-perfil', // troque pelo seu link
    },
  ],

  // Github buttons
  githubButtons: {
    isEnabled: true,
  },
};
