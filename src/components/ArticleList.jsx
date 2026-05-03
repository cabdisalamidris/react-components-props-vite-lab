
import propTypes from "prop-types";
import Article from "./Article";


function ArticleList({ posts }) {
return (
  <main>
    {posts.map((post) => (
      <Article 
      key={post.id} 
      title={post.title} 
      date={post.date} 
      preview={post.preview} 
      />
    ))}
  </main>
);
}
ArticleList.propTypes = {
  posts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      title: propTypes.string.isRequired,
      date: propTypes.string.isRequired,
      preview: propTypes.string.isRequired,
    })
  ).isRequired,
};
export default ArticleList;
