import { ArticleMetadata } from "../ArticleMetadata.ts";
import Tag from "./Tag.tsx";

type Props = {
  metaData: ArticleMetadata;
};

const MetaHeader = (props: Props) => {
  return (
    <div>
      {props.metaData.date}
      <div>
        {props.metaData.tagTexts.map((tag, index) => (
          <Tag text={tag} key={index} />
        ))}
      </div>
    </div>
  );
};

export default MetaHeader;
