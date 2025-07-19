import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";

function Home() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("courses")) || [];
    setCourses(stored);
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this course?");
    if (!confirmDelete) return;

    const updated = courses.filter((course) => course.id !== id);
    setCourses(updated);
    localStorage.setItem("courses", JSON.stringify(updated));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {courses.length === 0 ? (
        <p>No Course added yet.</p>
      ) : (
        courses.map((course) => (
          <CourseCard key={course.id} course={course} onDelete={handleDelete} />
        ))
      )}
    </div>
  );
}

export default Home;
