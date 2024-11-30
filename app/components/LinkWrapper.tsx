"use client";
import Link from "next/link";
import styles from "./linkwrapper.module.css";

type Props = {
  href: string;
  text: string;
};

export default function LinkWrapper(props: Props) {
  return (
    <span className={styles.linkwrapper}>
      <Link href={props.href}>{props.text + " >>"}</Link>
    </span>
  );
}
