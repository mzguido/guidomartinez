import Image from 'next/image';
import styles from './page.module.css';

import profilePic from '../public/profile.jpg';
import SocialMedia from './components/SocialMedia';
import { Info } from '../interfaces';
import { createImportSpecifier } from 'typescript';
import Project from './components/Project';

async function getData(): Promise<Info> {
  const res = await fetch('http://localhost:3000/api/info');

  if (!res.ok) {
    throw new Error('Failed to fetch data ');
  }

  return res.json();
}

export default async function Home() {
  const { media, projects, technologies } = await getData();

  console.log(technologies['next']);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.presentation}>
          <div className={styles.about}>
            <h1 className={styles.title}>Guido Martinez</h1>
            <h1 className={styles.subtitle}>Full Stack developer</h1>
            <p>
              Estudiente de 5to año de Ingenieria en Sistemas de Informacion en
              la UTN-FRC, con conocimientos en desarrollo web y mobile.
            </p>

            <button>
              <span>Descargar CV</span>
            </button>
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

        <div>
          {projects.map((project) => {
            return <Project project={project} />;
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
