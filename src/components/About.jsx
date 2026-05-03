import PropTypes from "prop-types";
function About({ image, about }) {
  return (
    <aside>
      <img src={image} alt="" />
      <p>{about}</p>
    </aside>
  );
}
About.propTypes = {
  image: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};
export default About;