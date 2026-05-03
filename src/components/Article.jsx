
import propTypes from "prop-types";

function Article({ title, date, preview }) {
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
    );
}
Article.propTypes = {
    title: propTypes.string.isRequired,
    date: propTypes.string.isRequired,
    preview: propTypes.string.isRequired,
};
export default Article;