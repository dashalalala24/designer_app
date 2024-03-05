import { CSSProperties, FC } from "react";
import styles from "./styles.module.css";

type ButtonProps = {
  text: string;
  style?: CSSProperties;
  icon?: string;
  iconStyle?: CSSProperties;
};

export const Button: FC<ButtonProps> = ({ text, style, icon, iconStyle }) => {
  return (
    <button className={styles.button} style={style}>
      {icon && (
        <div
          className={styles.icon}
          style={{ backgroundImage: `url(${icon})`, ...iconStyle }}
        ></div>
      )}
      <p className={styles.text}>{text}</p>
    </button>
  );
};
