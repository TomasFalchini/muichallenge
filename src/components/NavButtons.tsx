import React from "react";

interface Props {
  children: React.ReactNode;
  goTo: string;
  text: string;
}

function NavButtons({ goTo, children, text }: Props) {
  return (
    <div>
      {children}
      <a href={goTo}>{text}</a>
    </div>
  );
}

export default NavButtons;
