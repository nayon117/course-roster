import PropTypes from "prop-types";

const Card = ({ course,handleSelectedCourse }) => {
  return (
    <div>
      <div className="card h-[400px] md:h-[450px] lg:h-[400px] bg-base-100 py-2 shadow-xl">
        <figure>
          <img className=""
            src={course.img}
            alt="course image"
          />
        </figure>
        <div className="px-3 py-4  space-y-2">
                  <h2 className="card-title ">{course.title }</h2>
                  <p>{course.details}</p>
                  <div className="flex justify-between font-medium">
                      <p>$ Price:{course.price }</p>
                      <p>Credit: {course.credit }hr</p>
                  </div>
          <div className="card-actions  ">
            <button onClick={()=>handleSelectedCourse(course)} className="btn btn-block bg-[#2F80ED] mt-2 text-white font-semibold">Select</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  course: PropTypes.array.isRequired,
  handleSelectedCourse:PropTypes.func
};

export default Card;
