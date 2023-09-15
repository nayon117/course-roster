import PropTypes from "prop-types";

const Cart = ({ selectedCourse, remaining, totalCredit }) => {
  let count = 0;
  return (
    <div className=" w-full md:w-60 lg:w-64 text-black px-3 py-5 space-y-6 card bg-base-100 shadow-xl">
      <h2 className="text-[#2F80ED] whitespace-nowrap font-bold border-b-2 ">Credit Hour Remaining {remaining} hr</h2>
      
      <h2 className="font-bold text-xl space-y-3">Course Name</h2>

      {selectedCourse.map((course, idx) => {
        count++;
        return (
          <div className="py-1 whitespace-nowrap" key={idx}>
            {count}. {course.title}
          </div>
        );
      })}

        
      <div className="pt-12">
      <h2 className="font-medium border-t-2   ">Total Credit Hour :{totalCredit} </h2>
      </div>
    </div>
  );
};

Cart.propTypes = {
  selectedCourse: PropTypes.array,
  remaining: PropTypes.number,
  totalCredit: PropTypes.number,
};

export default Cart;
