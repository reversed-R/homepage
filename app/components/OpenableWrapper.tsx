"use client";
import styles from "./openable.module.css";
import { useState } from "react";
import { ReactNode } from "react";

type Props = {
  childrenOnNotClicked: ReactNode;
  childrenOnClicked: ReactNode;
  onClickOnNotClicked?: () => void;
};

export default function ClickableWrapper(props: Props) {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return isClicked ? (
    <div className={styles.clicked}>
      <button
        onClick={() => {
          setIsClicked(!isClicked);
        }}
      >
        CLOSE
      </button>
      {props.childrenOnClicked}
    </div>
  ) : (
    <div
      className={styles.notClicked}
      onClick={() => {
        setIsClicked(!isClicked);
        if (props.onClickOnNotClicked !== undefined) {
          props.onClickOnNotClicked();
        }
      }}
    >
      {props.childrenOnNotClicked}
    </div>
  );
}
