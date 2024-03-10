import { CSSProperties, FC } from 'react';
import styles from './styles.module.css';
// import SvgIcon from '../../../assets';

type ButtonProps = {
  text: string;
  style?: CSSProperties;
  icon?:
    | string
    | React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & {
          title?: string | undefined;
        }
      >;
  iconStyle?: CSSProperties;
  variant?: 'smooth' | 'default';
};

export const Button: FC<ButtonProps> = ({
  text,
  style,
  icon: Icon,
  iconStyle = {},
  variant = 'default',
}) => {
  return (
    <button
      className={variant === 'smooth' ? styles.buttonSmooth : styles.button}
      style={style}>
      {/* {icon && (
        <div
          className={styles.icon}
          style={{
            backgroundImage: `url("../../../assets/icons/${icon}.svg")`,
            ...iconStyle,
          }}></div>
      )} */}
      {/* {icon && (
        <SvgIcon
          iconName={icon}
          svgProp={iconStyle}
        />
      )} */}
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
