"use client";
import styles from "./sitemap.module.css";
import { useState } from "react";
import LinkWrapper from "./LinkWrapper.tsx";

// type Props = {
//   isOpen: boolean;
// };

export default function SiteMap() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClickFn = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={isOpen ? styles.sitemapOpened : styles.sitemap}
      onClick={onClickFn}
    >
      <p>SITE MAP</p>
      {isOpen ? (
        <div>
          <LinkWrapper href="./blog" text="blog"></LinkWrapper>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
