const media = [
  {
    name: 'github',
    url: 'https://github.com/mzguido',
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/guido-martinez',
  },
  {
    name: 'gmail',
    url: 'mailto:martinez.guido14@gmail.com',
  },
];

const projects = [
  {
    name: 'ballstats',
    label: 'BallStats',
    url: 'https://nba-stats-f6eaa.web.app/teams',
    github: 'https://github.com/mzguido/nba',
    description: `Progresive web app responsive para ver estadisticas de la NBA.
       Cuenta con un buscador e informacion de jugadores, equipos y
       partidos. Permite ingresar y añadir equipos a favoritos.`,
    stack: ['angular', 'ts', 'firebase', 'css', 'html', 'bootstrap'],
  },
  {
    name: 'pomonotes',
    label: 'PomoNotes',
    url: 'https://pomodoronotes.web.app/',
    github: 'https://github.com/mzguido/PomodoroNotes',
    description: `PWA con contador pomodoro, tareas y listas.
      Permite utilizar la tecnica pomodoro y asociarlo a una tarea. Las tareas pueden marcarse como
      completadas o eliminarse y Los intervalos de trabajo y descansoson configurables.
      Se puede ingresar con google y guardar las tareas en la nube.
      Disponible para instalar en el escritorio o en el celular.`,
    stack: ['angular', 'ts', 'firebase', 'css', 'html', 'bulmaio'],
  },
  {
    name: 'todoapp',
    label: 'TodoApp',
    url: 'https://ensolvers-front.vercel.app/',
    github: 'https://github.com/mzguido/ensolvers-front',
    description: `Aplicacion web de notas creada para un challenge.
        Permite crear, editar, eliminar y archivar notas.
        Permite asignar y filtrar notas por categoria.`,
    stack: [
      'react',
      'vite',
      'ts',
      'postgre',
      'css',
      'html',
      'node',
      'express',
      'jwt',
      'sequelize',
    ],
  },
];

const technologies = [
  {
    color: '#3178c6',
    label: 'TypeScript',
    name: 'ts',
  },
  {
    color: '#dd1b16',
    label: 'Angular',
    name: 'angular',
  },
  {
    color: '#61dafb',
    label: 'React',
    name: 'react',
  },
  {
    color: '#61dafb',
    label: 'React Native',
    name: 'rnative',
  },
  {
    color: '#000000',
    label: 'Next.js',
    name: 'next',
  },
  {
    color: '#339933',
    label: 'Node.js',
    name: 'node',
  },
  {
    color: '#000000',
    label: 'Express',
    name: 'express',
  },
  {
    color: '#646cff',
    label: 'Vite',
    name: 'vite',
  },
  {
    color: '#47a248',
    label: 'MongoDB',
    name: 'mongo',
  },
  {
    color: '#ffca28',
    label: 'Firebase',
    name: 'firebase',
  },
  {
    color: '#336791',
    label: 'PostgreSQL',
    name: 'postgre',
  },
  {
    color: '#52b0e7',
    label: 'Sequelize',
    name: 'sequelize',
  },
  {
    color: '#000000',
    label: 'JWT',
    name: 'jwt',
  },
  {
    color: '#1572b6',
    label: 'CSS',
    name: 'css',
  },
  {
    color: '#e34c26',
    label: 'HTML',
    name: 'html',
  },
  {
    color: '#cc6699',
    label: 'Sass',
    name: 'sass',
  },
  {
    color: '#563d7c',
    label: 'Bootstrap',
    name: 'bootstrap',
  },
  {
    color: '#00d1b2',
    label: 'Bulma.io',
    name: 'bulmaio',
  },
];

// const technologies = {
//   next: {
//     color: '#000000',
//     label: 'Next.js',
//   },
//   ts: {
//     color: '#3178c6',
//     label: 'TypeScript',
//   },
//   mongo: {
//     color: '#47a248',
//     label: 'MongoDB',
//   },
//   firebase: {
//     color: '#ffca28',
//     label: 'Firebase',
//   },
//   react: {
//     color: '#61dafb',
//     label: 'React',
//   },
//   angular: {
//     color: '#dd1b16',
//     label: 'Angular',
//   },
//   rnative: {
//     color: '#61dafb',
//     label: 'React Native',
//   },
//   node: {
//     color: '#339933',
//     label: 'Node.js',
//   },
//   express: {
//     color: '#000000',
//     label: 'Express',
//   },
//   css: {
//     color: '#1572b6',
//     label: 'CSS',
//   },
//   html: {
//     color: '#e34c26',
//     label: 'HTML',
//   },
//   sass: {
//     color: '#cc6699',
//     label: 'Sass',
//   },
//   bootstrap: {
//     color: '#563d7c',
//     label: 'Bootstrap',
//   },
//   postgre: {
//     color: '#336791',
//     label: 'PostgreSQL',
//   },
//   bulmaio: {
//     color: '#00d1b2',
//     label: 'Bulma.io',
//   },
//   jwt: {
//     color: '#000000',
//     label: 'JWT',
//   },
//   sequelize: {
//     color: '#52b0e7',
//     label: 'Sequelize',
//   },
//   vite: {
//     color: '#646cff',
//     label: 'Vite',
//   },
// };

export const info = { media, projects, technologies };
