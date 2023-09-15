import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import Cart from "./Cart";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [remaining, setRemaining] = useState(20);
  const [totalCredit, setTotalCredit] = useState(0);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const handleSelectedCourse = (course) => {
    const isExist = selectedCourse.find((item) => item.id === course.id);
    let credit = course.credit;
    if (isExist) {
      return toast.error('🦄 Already Selected!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    } else {
      selectedCourse.forEach((item) => {
        credit = credit + item.credit;
      });
      const totalRemaining = 20 - credit;
      if (credit > 20) {
        return toast.error('🦄 Credit Limit Exceeded!', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      } else {
        setTotalCredit(credit)
        setRemaining(totalRemaining);
        setSelectedCourse([...selectedCourse, course]);
      }
    }
  };

  return (
    <div className="flex gap-8 md:gap-4 flex-col md:flex-row ">
      {/* card section  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-3">
        {courses.map((course) => (
          <Card
            key={course.id}
            course={course}
            handleSelectedCourse={handleSelectedCourse}
            ToastContainer={ToastContainer}
          ></Card>
        ))}
      </div>
      {/* cart section  */}
      <div>
        <Cart
          selectedCourse={selectedCourse}
          remaining={remaining}
          totalCredit={totalCredit}
        ></Cart>
      </div>
    </div>
  );
};

Home.propTypes = {
  Home: PropTypes.func,
};

export default Home;
