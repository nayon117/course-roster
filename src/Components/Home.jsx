import PropTypes from "prop-types";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* card section  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>

      {/* cart section  */}
      <div></div>
    </div>
  );
};

Home.propTypes = {
  Home: PropTypes.func,
};

export default Home;
