import { CSSProperties, FC } from 'react';
import styles from './styles.module.css';
// import SvgIcon from '../../../assets';

type ButtonProps = {
  text: string;
  style?: CSSProperties;
  icon?: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  variant?: 'smooth' | 'default';
};

export const Button: FC<ButtonProps> = ({ text, style, icon: Icon, variant = 'default' }) => {
  return (
    <button
      className={variant === 'smooth' ? styles.buttonSmooth : styles.button}
      style={style}>
      {Icon && <Icon />}
      <p
        className={styles.text}
        // className={variant === 'smooth' ? styles.textSmooth : styles.text}
      >
        {text}
      </p>
    </button>
  );
};
