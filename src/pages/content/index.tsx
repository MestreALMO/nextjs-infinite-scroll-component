import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const Content = ({ data }) => {
  const [posts, setPosts] = useState(data);
  const [hasMore, setHasMore] = useState(true);

  const getMorePost = async () => {
    const res = await fetch(
      `http://localhost:3100/?start=${posts.length}&limit=${posts.length + 6}`
    );
    const newPosts = await res.json();
    setPosts((post) => [...post, ...newPosts]);
  };

  return (
    <>
      <InfiniteScroll
        dataLength={posts.length}
        next={getMorePost}
        hasMore={hasMore}
        loader={<h3> Loading...</h3>}
        endMessage={<h4>Nothing more to show</h4>}
      >
        {posts.map((data) => (
          <h3>{data.project}</h3>
        ))}
      </InfiniteScroll>
      <style jsx>
        {`
          .back {
            padding: 10px;
            background-color: dodgerblue;
            color: white;
            margin: 10px;
          }
        `}
      </style>
    </>
  );
};

export default Content;
