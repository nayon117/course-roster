import PropTypes from "prop-types";

const Card = ({ course }) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src={course.img}
            alt="course image"
          />
        </figure>
        <div className="card-body ">
                  <h2 className="card-title">{course.title }</h2>
                  <p>{course.details}</p>
                  <div className="flex justify-between">
                      <p>$ Price:{course.price }</p>
                      <p>Credit: {course.credit }hr</p>
                  </div>
          <div className="card-actions  ">
            <button className="btn btn-block bg-[#2F80ED] text-white font-semibold">Select</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  course: PropTypes.array.isRequired,
};

export default Card;
