import type { NextPage } from "next";

import Content from "./content";

const Home: NextPage = (props) => {
  return (
    <>
      <h1>nextjs-infinite-scroll-component</h1>
      <hr />
      <div>
        <Content data={props.data} />
        {console.log(props.data)}
      </div>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const data = await fetch("http://localhost:3100/?limit=6").then((response) =>
    response.json()
  );
  return {
    props: { data },
  };
};
