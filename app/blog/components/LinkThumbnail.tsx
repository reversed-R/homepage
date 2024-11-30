import styles from "./thumbnail.module.css";
import Tag from "./Tag.tsx";
import { ArticleMetadata } from "../ArticleMetadata.ts";

type Props = ArticleMetadata & {
  href: string;
  // onClickFunc: (id: string) => void;
  // selectedTagValues: string[];
};

export default function Thumbnail(props: Props) {
  return (
    <div className={styles.thumbnail}>
      <a href={props.href}>
        <div className="titles">
          <div>
            <h2>{props.title}</h2>
            <h3>{props.date}</h3>
          </div>
        </div>

        <p>{props.text}</p>
        <div>
          {props.tagTexts.map((text, index) => (
            <Tag text={text} key={index} />
          ))}
        </div>
      </a>
    </div>
  );
}
