import styles from "./tag.module.css";
type Props = {
  text: string;
  onClick?: () => void;
  // key: string;
};

export default function Tag(props: Props) {
  return (
    <span className={styles.tag} onClick={props.onClick}>
      {props.text}
    </span>
  );
}
