import PropTypes from "prop-types";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App({ name, image, about, posts }) {
  return (
    <div className="App">
      <Header name={name} />
      <About image={image} about={about} />
      <ArticleList posts={posts} />
    </div>
  );
}

App.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  about: PropTypes.string,
  posts: PropTypes.array,
};

export default App;