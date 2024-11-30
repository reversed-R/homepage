import fs from "fs";
import path from "path";
import styles from "./page.module.css";
import Viewer from "../../components/Viewer.tsx";
import HomeLogo from "@/app/components/HomeLogo.tsx";
import BlogTopLink from "../../components/BlogTopLink.tsx";
import { ArticleMetadata } from "../../ArticleMetadata.ts";
import MetaHeader from "../../components/MetaHeader.tsx";

export const generateStaticParams = async () => {
  const articles = fs.readdirSync(
    path.resolve(process.cwd(), "app/blog/articles/"),
  );
  console.log("articles", articles);

  return articles
    .filter((dir) => dir !== "meta" && dir !== "[slug]")
    .map((article) => ({
      slug: article,
    }));
};

const getMdData = (articleId: string): string => {
  const mdData = fs
    .readFileSync(
      path.resolve(process.cwd(), "app/blog/articles/", articleId, "index.md"),
    )
    .toString();

  // console.log(mdData);
  return mdData;
};

const getMetaData = (articleId: string): ArticleMetadata | undefined => {
  const data = fs.readFileSync(
    path.join(process.cwd(), "app/blog/articles/meta/meta.json"),
  );
  const articles: ArticleMetadata[] = JSON.parse(data.toString()).articles;

  const metaData = articles.find((article) => article.id === articleId);

  return metaData;
};

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug: string = (await params).slug;
  const mdData = getMdData(slug);
  const metaData = getMetaData(slug);

  return (
    <div className={styles.page}>
      <div className={styles.menubar}>
        <HomeLogo />
        <BlogTopLink />
      </div>
      <main className={styles.main}>
        <div className={styles.central}>
          {metaData !== undefined ? <MetaHeader metaData={metaData} /> : <></>}
          <Viewer mdData={mdData} />
        </div>
      </main>
    </div>
  );
};

export default Page;
