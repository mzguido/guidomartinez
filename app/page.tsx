import Image from 'next/image';
import styles from './page.module.css';

import profilePic from '../public/profile.jpg';
import SocialMedia from './components/SocialMedia';
import { IInfo } from '../interfaces';
import Project from './components/Project';
import { info } from '../data';
import Technology from './components/Technology';
import Study from './components/Study';

// async function getData(): Promise<Info> {
//   const res = await fetch('http://localhost:3000/api/info');

//   if (!res.ok) {
//     throw new Error('Failed to fetch data ');
//   }

//   return res.json();
// }

export default async function Home() {
  // const { media, projects, technologies } = await getData();
  const { media, projects, technologies, studies } = info;

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div
          style={{
            position: 'absolute',
            top: 10,
            // right: 30,
            display: 'flex',
            gap: '10px',
            alignSelf: 'flex-end',
          }}
        >
          {media.map((social) => {
            return <SocialMedia key={social.name} socialMedia={social} />;
          })}
        </div>

        <div className={styles.presentation}>
          <div className={styles.about}>
            <h1 className={styles.title}>Guido Martinez</h1>
            <h1 className={styles.role}>Full Stack developer</h1>
            <p>
              Estudiente de 5to año de Ingenieria en Sistemas de Informacion en
              la UTN-FRC, con conocimientos en desarrollo web y mobile.
            </p>

            <a href="./cv/CV-Martinez-Guido.pdf" download>
              <span>Descargar CV</span>
            </a>
          </div>
          <Image
            alt="Guido Martinez profile photo"
            src={profilePic}
            width={300}
            height={300}
            style={{
              objectFit: 'cover',
              borderRadius: '50%',
            }}
          />
        </div>

        <h1 className={styles.subtitle}>
          <span>{'<'}</span>
          Proyectos
          <span>{'/>'}</span>
        </h1>
        <div className={styles.projects}>
          {projects.map((project) => {
            return <Project project={project} technologies={technologies} />;
          })}
        </div>

        <h1 className={styles.subtitle}>
          <span>{'<'}</span>
          Estudios
          <span>{'/>'}</span>
        </h1>
        <div className={styles.studies}>
          {studies.map((study) => {
            return <Study study={study} />;
          })}
        </div>

        <h1 className={styles.subtitle}>
          <span>{'<'}</span>
          Stack
          <span>{'/>'}</span>
        </h1>
        <div className={styles.stack}>
          {technologies.map((tech) => {
            return <Technology technology={tech} />;
          })}
        </div>

        <div className={styles.contact}>
          {media.map((social) => {
            return <SocialMedia key={social.name} socialMedia={social} />;
          })}
          <span>Email: martinez.guido14@gmail.com</span>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
}
