import React from "react";

const Article = ({ title, author, text }) => {
  const styles = { marginTop: 40 };
  return (
    <article style={styles}>
      <h3 style={{ fontSize: 24 }}>{title}</h3>
      <span style={{ fontStyle: "italic" }}>{author}</span>
      <p>{text}</p>
    </article>
  );
};

export default Article;
