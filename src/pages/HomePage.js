import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "czym jest teoria strun?",
    author: "jan nowak",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni nisi commodi dolor. Omnis tempora laudantium architecto earum qui doloremque cum quidem. Iste voluptates dolorem dolorum aliquid libero soluta temporibus consequuntur tempora eius obcaecati. Perspiciatis quo doloribus modi ratione. Dicta cumque sunt ducimus id impedit numquam architecto pariatur quod, adipisci in. Id earum voluptatibus harum maxime ab a eius sequi ratione quaerat vero nihil, expedita nobis quam, nesciunt officia pariatur nam ipsam at, magnam cumque exercitationem! Nesciunt saepe suscipit enim illum, alias laboriosam harum excepturi autem ullam provident in corrupti eligendi repellendus earum, ipsam mollitia dolore, fugiat delectus rerum facere nulla.",
  },
  {
    id: 2,
    title: "paradoks fermiego",
    author: "jan nowak",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni nisi commodi dolor. Omnis tempora laudantium architecto earum qui doloremque cum quidem. Iste voluptates dolorem dolorum aliquid libero soluta temporibus consequuntur tempora eius obcaecati. Perspiciatis quo doloribus modi ratione. Dicta cumque sunt ducimus id impedit numquam architecto pariatur quod, adipisci in. Id earum voluptatibus harum maxime ab a eius sequi ratione quaerat vero nihil, expedita nobis quam, nesciunt officia pariatur nam ipsam at, magnam cumque exercitationem! Nesciunt saepe suscipit enim illum, alias laboriosam harum excepturi autem ullam provident in corrupti eligendi repellendus earum, ipsam mollitia dolore, fugiat delectus rerum facere nulla.",
  },
  {
    id: 3,
    title: "Ciemna materia",
    author: "jan nowak",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni nisi commodi dolor. Omnis tempora laudantium architecto earum qui doloremque cum quidem. Iste voluptates dolorem dolorum aliquid libero soluta temporibus consequuntur tempora eius obcaecati. Perspiciatis quo doloribus modi ratione. Dicta cumque sunt ducimus id impedit numquam architecto pariatur quod, adipisci in. Id earum voluptatibus harum maxime ab a eius sequi ratione quaerat vero nihil, expedita nobis quam, nesciunt officia pariatur nam ipsam at, magnam cumque exercitationem! Nesciunt saepe suscipit enim illum, alias laboriosam harum excepturi autem ullam provident in corrupti eligendi repellendus earum, ipsam mollitia dolore, fugiat delectus rerum facere nulla.",
  },
];
const HomePage = () => {
  const articlesList = articles.map(article => <Article key={article.id} {...article} />);
  return <section>{articlesList}</section>;
};

export default HomePage;
