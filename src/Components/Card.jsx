import PropTypes from "prop-types";
import { BiDollar } from "react-icons/bi";
import { BsBook } from "react-icons/bs";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = ({ course, handleSelectedCourse}) => {
  return (
    <div>
      <div className="card h-[450px] md:h-[470px] lg:h-[450px] bg-base-100 py-2 shadow-xl">
        
        <div className="h-48 md:h-40 lg:h-44 p-2 mx-auto">
        <img  src={course.img} alt="course image" /> 
          </div>
       
        <div className="px-3 py-4  space-y-2">
          <h2 className="card-title ">{course.title}</h2>
          <p>{course.details}</p>
          <div className="flex justify-between font-medium">
            <div className="flex items-center">
              <p >
                <BiDollar></BiDollar>
              </p> 
              <p>Price:{course.price}</p>
            </div>
            <div className="flex items-center">
              <p className="mr-1 md:mr-0 lg:mr-1">
              <BsBook></BsBook>
              </p> 
                Credit:{course.credit}hr
            </div>
          </div>
          <div className="card-actions  ">
            <button
              onClick={() => handleSelectedCourse(course)}
              className="btn btn-block bg-[#2F80ED] mt-2 text-white font-semibold"
            >
              Select
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  course: PropTypes.array.isRequired,
  handleSelectedCourse: PropTypes.func,
  
};

export default Card;
