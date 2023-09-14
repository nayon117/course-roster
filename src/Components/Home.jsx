import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

const Home = () => {

    const [courses,setCourses] = useState([])

    useEffect(() => {
        fetch("./data.json")
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])


  return (
    <div className="flex flex-col md:flex-row">
      {/* card section  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> 

          {
               courses.map(course=><Card key={course.id} course={course} ></Card>)
          }

          </div>
      {/* cart section  */}
      <div></div>
    </div>
  );
};

Home.propTypes = {
  Home: PropTypes.func,
};

export default Home;
