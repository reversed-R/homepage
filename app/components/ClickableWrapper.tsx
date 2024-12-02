"use client";
import styles from "./clickable.module.css";
import { useState } from "react";
import { ReactNode } from "react";

type Props = {
  childrenOnNotClicked: ReactNode;
  childrenOnClicked: ReactNode;
};

export default function ClickableWrapper(props: Props) {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const onClickFn = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      className={isClicked ? styles.clicked : styles.notClicked}
      onClick={onClickFn}
    >
      {isClicked ? props.childrenOnClicked : props.childrenOnNotClicked}
    </div>
  );
}
