"use client";
import styles from "./homelogo.module.css";
import Image from "next/image";
import Link from "next/link";

export default function HomeLogo() {
  const URIString = "reversed-R.dev";

  // <Image
  //   className={styles.logo}
  //   src="/icon.svg"
  //   alt="page logo"
  //   width={60}
  //   height={60}
  //   style={{ width: "100%", aspectRatio: 1 / 1 }}
  //   priority
  // />

  return (
    <div className={styles.homelogo}>
      <Link href={"/"}>
        <img src="/icon.svg" alt="page logo" />
        <span>{URIString}</span>
      </Link>
    </div>
  );
}
