import fs from "fs";
import path from "path";
import Blog from "./blog";
import { ArticleMetadata } from "./ArticleMetadata.ts";

type Params = {
  articles: ArticleMetadata[];
  tagTexts: string[];
};

export const generateStaticParams = (): Params => {
  const data = fs.readFileSync(path.join(__dirname, "articles/meta/meta.json"));

  return JSON.parse(data.toString());
};

const Page = () => {
  const params = generateStaticParams();
  return <Blog articles={params.articles} tagTexts={params.tagTexts} />;
};

export default Page;
