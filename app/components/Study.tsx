import { IStudy } from '../../interfaces';
import styles from './Study.module.css';

type Props = {
  study: IStudy;
};

const Study = ({ study }: Props) => {
  return (
    <div className={styles.study}>
      <h4 className={styles.title}>{study.title}</h4>
      <p className={styles.place}>{study.place}</p>

      <div className="row" style={{ justifyContent: 'flex-start' }}>
        <p className={styles.status}>
          {study.since}-{study.until}
        </p>
        <p className={styles.status}>{study.status}</p>
      </div>
    </div>
  );
};

export default Study;
