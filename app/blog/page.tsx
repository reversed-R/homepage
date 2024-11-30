import fs from "fs";
import path from "path";
import Blog from "./blog";
import { ArticleMetadata } from "./ArticleMetadata.ts";
import process from "process";

export const generateStaticParams = () => {
  const data = fs.readFileSync(
    path.resolve(process.cwd(), "app/blog/articles/meta/meta.json"),
  );

  return JSON.parse(data.toString());
};

const Page = () => {
  const params = generateStaticParams();
  return <Blog articles={params.articles} tagTexts={params.tagTexts} />;
};

export default Page;
