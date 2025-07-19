import { useNavigate } from "react-router-dom";
import CourseForm from "../components/CourseForm";

function AddCourse() {
  const navigate = useNavigate();

  const handleAdd = (course) => {
    const existing = JSON.parse(localStorage.getItem("courses")) || [];
    const updated = [...existing, course];
    localStorage.setItem("courses", JSON.stringify(updated));
    navigate("/");
  };

  return (
    <div>
      <CourseForm onAdd={handleAdd} />
    </div>
  );
}

export default AddCourse;