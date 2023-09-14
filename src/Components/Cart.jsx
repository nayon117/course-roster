import PropTypes from "prop-types";

const Cart = ({ selectedCourse, remaining, totalCredit }) => {
  let count = 0;
  return (
    <div className="w-64 text-black card bg-base-100 shadow-xl">
      <h2>Credit Hour Remaining: {remaining}</h2>
      <hr />
      <h2>Course Name</h2>

      {selectedCourse.map((course, idx) => {
        count++;
        return (
          <div key={idx}>
            {" "}
            {count}. {course.title}
          </div>
        );
      })}

      <hr />
      <h2>Total credit hour:{totalCredit} </h2>
    </div>
  );
};

Cart.propTypes = {
  selectedCourse: PropTypes.array,
  remaining: PropTypes.number,
  totalCredit: PropTypes.number,
};

export default Cart;
