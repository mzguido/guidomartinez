// export interface Info {
//   media: Media[];
//   projects: Project[];
//   technologies: Technologies;
// }

// export interface Media {
//   name: string;
//   url: string;
// }

// export interface Project {
//   name: string;
//   label: string;
//   url: string;
//   description: string;
//   stack: string[];
// }

// export interface Technologies {
//   react: Technology;
//   rnative: Technology;
//   angular: Technology;
//   next: Technology;
//   ts: Technology;
//   mongo: Technology;
//   firebase: Technology;
//   postgre: Technology;
//   node: Technology;
//   express: Technology;
//   css: Technology;
//   html: Technology;
//   sass: Technology;
//   bootstrap: Technology;
//   bulmaio: Technology;
//   jwt: Technology;
//   sequelize: Technology;
// }

// export interface Technology {
//   color: string;
//   label: string;
// }

export interface IInfo {
  media: IMedia[];
  projects: IProject[];
  technologies: { [key: string]: ITechnology };
}

export interface IMedia {
  name: string;
  url: string;
}

export interface IProject {
  name: string;
  label: string;
  url: string;
  github: string;
  description: string;
  stack: string[];
}

export interface ITechnology {
  color: string;
  label: string;
}
