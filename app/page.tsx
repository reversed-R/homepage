"use client";
import styles from "./page.module.css";
import HomeLogo from "./components/HomeLogo.tsx";
import LinkWrapper from "./components/LinkWrapper.tsx";
import ContentWrapper from "./components/ContentWrapper.tsx";
import OpenableWrapper from "./components/OpenableWrapper";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>ゃーのホームページ</title>
        <meta property="og:title" content="ゃーのホームページ" />
        <meta property="og:description" content="powered by ゃー" />
        <meta property="og:image" content="../public/icon.svg" />
        <meta property="og:url" content="https://reversed-R.dev" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ゃーのホームページ" />
        <meta name="twitter:description" content="powered by ゃー" />
        <meta name="twitter:image" content="../public/icon.svg" />
      </Head>
      <div className={styles.page}>
        <div className={styles.menubar}>
          <HomeLogo />
          <OpenableWrapper
            childrenOnNotClicked={<p>SITE MAP</p>}
            childrenOnClicked={
              <LinkWrapper href="./blog/" text="blog"></LinkWrapper>
            }
          />
        </div>

        <main className={styles.main}>
          <div className={styles.central}>
            <ContentWrapper>
              <p>やぁ、こんにちは！</p>
              <p>こちらは、ゃーのホームページです。</p>
              <p>今はなんもないですが、少しずつ整備していこうと思います。</p>
              <LinkWrapper href="./blog/" text="blog"></LinkWrapper>
            </ContentWrapper>

            <ContentWrapper>
              <h3>自己紹介</h3>
              <p>筑波大学情報学群情報科学類(coins)24年入学(一般)</p>
              <h4>各種アカウント</h4>
              <p>
                Twitter: @reversed_R
                <wbr />
                <LinkWrapper
                  href="https://x.com/reversed_R"
                  text="x.com/reversed_R"
                ></LinkWrapper>
              </p>
              <p>
                GitHub: reversed-R
                <LinkWrapper
                  href="https://github.com/reversed-R"
                  text="github.com/reversed-R"
                ></LinkWrapper>
              </p>
            </ContentWrapper>
          </div>
        </main>
      </div>
    </>
  );
}
