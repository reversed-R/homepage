"use client";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

// const Div = styled.div`
//   margin: 20px;
//   padding: 20px;
//
//   box-shadow: 0px 1px 5px rgb(144, 144, 144);
//   border-radius: 10px;
//
//   background-color: white;
//
//   overflow-wrap: break-word;
// `;

export default function ContentComponent(props: Props) {
  return <span>{props.children}</span>;
}
