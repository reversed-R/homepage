"use client";
import { useState } from 'react'
import { useEffect } from 'react'
import styles from "./page.module.css";
import HomeLogo from "../components/HomeLogo.tsx";
import { ArticleMetadata } from "./ArticleMetadata.ts";
import OpenableWrapper from "../components/OpenableWrapper.tsx";
import Tag from "./components/Tag.tsx";
import LinkThumbnail from './components/LinkThumbnail.tsx';
import Head from "next/head";


type SelectableTag = {
  text: string;
  isSelected: boolean;
}

type MatchableArtcile = ArticleMetadata & {
  matchedNum: number;
};

const getSelectedTagTexts = (tags: SelectableTag[]) => {
  const selectedTagTexts: string[] = [];
  tags.map((tag) => (tag.isSelected ? selectedTagTexts.push(tag.text) : 0));

  return selectedTagTexts;
};
const sortArticles = (articles: MatchableArtcile[], tagTexts: string[]): MatchableArtcile[] => {
  //initialization of article matched number 
  const sorted = [...articles];

  if (tagTexts.length === 0) {
    sorted.map((article) => {
      article.matchedNum = 1;
    })
    return sorted;
  }

  //count matched number for all articles
  sorted.map((article) => {
    article.matchedNum = 0;
    tagTexts.map((text) => {
      if (article.tagTexts.includes(text)) {
        article.matchedNum++;
      }
    });
  });

  //sort artilces as descending order by matched number
  return sorted.toSorted(
    (a: MatchableArtcile, b: MatchableArtcile) => {
      if (a.matchedNum >= b.matchedNum) {
        return -1;
      }
      else {
        return 1;
      }
    }
  );
};

type Props = {
  articles: ArticleMetadata[];
  tagTexts: string[];
};

export default function Blog(props: Props) {
  const [tags, setTags] = useState<SelectableTag[]>(props.tagTexts.map((tagText) => ({ text: tagText, isSelected: false })));
  const [articles, setArticles] = useState<MatchableArtcile[]>(props.articles.map((article) => ({ ...article, matchedNum: 1 })));


  useEffect(() => {
    setArticles(sortArticles(articles, getSelectedTagTexts(tags)));
  }, [tags]);



  return (
    <>
      <Head>
        <title>ゃーのブログ</title>
        <meta property="og:title" content="ゃーのブログ" />
        <meta property="og:description" content="powered by ゃー" />
        <meta property="og:image" content="../public/icon.svg" />
        <meta property="og:url" content="https://reversed-R.dev" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ゃーのブログ" />
        <meta name="twitter:description" content="powered by ゃー" />
        <meta name="twitter:image" content="../public/icon.svg" />
      </Head>
    <div className={styles.page}>
      <div className={styles.menubar}>
        <HomeLogo />
        <OpenableWrapper
          childrenOnNotClicked={<span>SEARCH</span>}
          childrenOnClicked={
            <div key={"onclick"}>
              <h2>記事をタグ検索</h2>
                <h3>selected</h3>
                <div>
                  {tags.map((tag, index) => (
                    tag.isSelected
                      ? (
                        <Tag
                          text={tag.text}
                          onClick={() => {
                            const tmp = [...tags];
                            tmp[index].isSelected = !tmp[index].isSelected;
                            setTags(tmp);
                          }}
                          key={index}
                        />
                      )
                      : <></>
                  ))}
                </div>
                <br />
                <h3>tag list</h3>
                <div>
                  {tags.map((tag, index) => (
                    !tag.isSelected
                      ? (
                        <Tag
                          text={tag.text}
                          onClick={() => {
                            const tmp = [...tags];
                            tmp[index].isSelected = !tmp[index].isSelected;
                            setTags(tmp);
                          }}
                          key={index}
                        />
                      )
                      : <></>
                  ))}
                </div>
              </div>
            }
          />
        </div>
        <main className={styles.main}>
          <div className={styles.central}>
            {articles.map((article, key) => (
              article.matchedNum > 0
                ? (
                  <LinkThumbnail
                    id={article.id}
                    title={article.title}
                    text={article.text}
                    date={article.date}
                    tagTexts={article.tagTexts}
                    href={"blog/articles/" + article.id}
                    key={key}
                  />
                )
                : <></>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
