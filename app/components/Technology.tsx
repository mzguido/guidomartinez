import Image from 'next/image';
import { ITechnology } from '../../interfaces';
import styles from './Technology.module.css';

type Props = {
  technology: ITechnology;
};

const Project = ({ technology }: Props) => {
  const { label, color } = technology;

  function getTextColor(
    bgColor: string,
    lightColor = 'white',
    darkColor = 'black'
  ) {
    var color = bgColor.charAt(0) === '#' ? bgColor.substring(1, 7) : bgColor;
    var r = parseInt(color.substring(0, 2), 16); // hexToR
    var g = parseInt(color.substring(2, 4), 16); // hexToG
    var b = parseInt(color.substring(4, 6), 16); // hexToB
    return r * 0.299 + g * 0.587 + b * 0.114 > 140 ? darkColor : lightColor;
  }

  return (
    <div style={{ position: 'relative' }}>
      <div
        className={styles.tech}
        style={{
          backgroundColor: color,
          color: getTextColor(color),
        }}
      >
        <span className={styles.text}>{label}</span>
      </div>
    </div>
  );
};

export default Project;
