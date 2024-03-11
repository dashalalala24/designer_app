import { CSSProperties, FC } from 'react';
import styles from './styles.module.css';
// import SvgIcon from '../../../assets';

type ButtonProps = {
  text: string;
  style?: CSSProperties;
  icon?: string | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  variant?: 'smooth' | 'default';
  onButtonClick?: unknown;
};

export const Button: FC<ButtonProps> = ({
  text,
  style,
  icon: Icon,
  variant = 'default',
  onButtonClick,
}) => {
  return (
    <button
      className={variant === 'smooth' ? styles.buttonSmooth : styles.button}
      style={style}
      onClick={onButtonClick}>
      {Icon && (
        <div className={styles.icon}>
          <Icon />
        </div>
      )}
      <p className={styles.text}>{text}</p>
    </button>
  );
};
