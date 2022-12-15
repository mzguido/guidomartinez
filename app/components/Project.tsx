import Image from 'next/image';
import { IProject, ITechnology } from '../../interfaces';
import styles from './Project.module.css';
import Technology from './Technology';

type Props = {
  project: IProject;
  technologies: { [key: string]: ITechnology };
};

const Project = ({ project, technologies }: Props) => {
  const { label, description, name, stack, github, url } = project;

  const techs = stack.map((tech) => technologies[tech]);

  console.log(techs);

  return (
    <div className={styles.project}>
      <h2>{label}</h2>
      <div className={styles.row}>
        <div className={styles.imgContainer}>
          <Image
            src={`/projects/${name}.png`}
            alt={`${name} project image`}
            width={400}
            height={280}
            style={{
              objectFit: 'cover',
              borderRadius: '16px',
            }}
          />
          <div className={styles.buttons}>
            <a className={styles.button} href={github}>
              Github
            </a>
            <a className={styles.button} href={url}>
              Demo
            </a>
          </div>
        </div>
        <div className={styles.col}>
          <span className={styles.description}>{description}</span>
          <div className={styles.stack}>
            {techs.map((technology) => (
              <Technology
                key={`project-stack-${technology.label}`}
                technology={technology}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
