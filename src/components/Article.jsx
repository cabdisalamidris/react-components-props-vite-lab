import PropTypes from "prop-types";

function Article({
  title,
  date = "January 1, 1970",
  preview,
  emoji,
  readTime
}) {
  return (
    <article>
      <h3>{title}</h3>
      <small className="meta">
        {date}. {emoji} {readTime}
      </small>
      <p>{preview}</p>
    </article>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  preview: PropTypes.string.isRequired,
  emoji: PropTypes.string,
  readTime: PropTypes.string
};

export default Article;