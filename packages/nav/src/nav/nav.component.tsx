import React from "react";

export type NavProps = {
  currentPage: string;
  onPageChange: (page: string) => void;
};

export const Nav: React.FC<NavProps> = (props) => {
  return (
    <div>
      <button onClick={() => props.onPageChange("home")}>Home</button>
      <button onClick={() => props.onPageChange("about")}>About</button>
      <button onClick={() => props.onPageChange("contact")}>Contact</button>
    </div>
  );
};
