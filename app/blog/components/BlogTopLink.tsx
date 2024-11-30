"use client";
import styles from "./blogtoplink.module.css";
import Link from "next/link";

export default function HomeLogo() {
  return (
    <div className={styles.homelogo}>
      <Link href={"/blog/"}>
        <span>{"BLOG TOP >>"}</span>
      </Link>
    </div>
  );
}
