import React from "react";

export type ContentProps = {
  currentPage: string;
};

export const Content: React.FC<ContentProps> = (props) => {
  return <div>BLAH: {props.currentPage}</div>;
};
