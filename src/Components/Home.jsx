import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import Cart from "./Cart";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [remaining, setRemaining] = useState(0);
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
      return alert("Already selected");
    } else {
      selectedCourse.forEach((item) => {
        credit = credit + item.credit;
      });
      const totalRemaining = 20 - credit;
      if (credit > 20) {
        return alert("not enough credit");
      } else {
        setTotalCredit(credit)
        setRemaining(totalRemaining);
        setSelectedCourse([...selectedCourse, course]);
      }
    }
  };

  return (
    <div className="flex gap-4 flex-col md:flex-row ">
      {/* card section  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
          <Card
            key={course.id}
            course={course}
            handleSelectedCourse={handleSelectedCourse}
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
