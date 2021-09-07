import * as React from "react";
import Main from "../pages/Main";

const App: React.FC = () => {
  const onClick = (title: string) => {
    console.log(`${title} 페이지 입니다!`);
  };
  return (
    <>
      <Main onClick={onClick} />
    </>
  );
};

export default App;
