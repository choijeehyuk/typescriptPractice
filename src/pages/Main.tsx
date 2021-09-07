import * as React from "react";

type MainProps = {
  title: string;
  onClick: (title: string) => void;
};

const Main = ({ title, onClick }: MainProps) => {
  const click = () => onClick(title);
  return (
    <>
      <h1>{title}</h1>
      <button onClick={click}>dd</button>
    </>
  );
};

Main.defaultProps = {
  title: "메인입니다!",
};

export default Main;
