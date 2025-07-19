import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import CourseForm from "../components/CourseForm";

function EditCourse() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("courses")) || [];
    const found = stored.find((s) => s.id === parseInt(id));
    if (!found) return navigate("/");
    setCourse(found);
  }, [id, navigate]);

  const handleUpdate = (updatedCourse) => {
    const stored = JSON.parse(localStorage.getItem("courses")) || [];
    const updatedList = stored.map((s) =>
      s.id === parseInt(id) ? updatedCourse : s
    );
    localStorage.setItem("courses", JSON.stringify(updatedList));
    navigate("/");
  };
  return (
    <div>
      {course && <CourseForm onAdd={handleUpdate} initialData={course} />}
    </div>
  );
}

export default EditCourse;