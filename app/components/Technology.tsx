import Image from 'next/image';
import { ITechnology } from '../../interfaces';
import styles from './Technology.module.css';

type Props = {
  technology: ITechnology;
};

const Technology = ({ technology }: Props) => {
  const { label, color, name } = technology;

  return (
    <div style={{ position: 'relative' }}>
      <div className={styles.tech}>
        <Image
          src={`/stack/${name}.svg`}
          alt={`stack-${name}-logo`}
          width={30}
          height={30}
        />
        <span className={styles.text}>{label}</span>
      </div>
    </div>
  );
};

export default Technology;
