import ReactMarkdown from "react-markdown";
import styles from "./viewer.module.css";

type Props = {
  mdData: string;
};

export default function Viewer(props: Props) {
  return (
    <div className={styles.viewer}>
      <ReactMarkdown>{props.mdData}</ReactMarkdown>
    </div>
  );
}
