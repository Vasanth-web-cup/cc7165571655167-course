import { useState, useEffect } from "react";

function CourseForm({ onAdd, initialData }) {
  const [form, setForm] = useState({
    courseName: "",
    courseCode: "",
    instructor: "",
    credits: "",
  });

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.courseName || !form.courseCode)
      return alert("Course name & code are required");
    onAdd({ ...form, id: initialData?.id || Date.now() });
    setForm({ courseName: "", courseCode: "", instructor: "", credits: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-6 shadow-md rounded-xl max-w-md mx-auto"
    >
      <h2 className="text-xl font-semibold mb-4 text-white">
        {initialData ? "Edit Course" : "Add New Course"}
      </h2>

      <input
        className="w-full p-2 border mb-3"
        type="text"
        name="courseName"
        placeholder="Course Name"
        value={form.courseName}
        onChange={handleChange}
      />
      <input
        className="w-full p-2 border mb-3"
        type="text"
        name="courseCode"
        placeholder="Course Code"
        value={form.courseCode}
        onChange={handleChange}
      />
      <input
        className="w-full p-2 border mb-3"
        type="text"
        name="instructor"
        placeholder="Instructor"
        value={form.instructor}
        onChange={handleChange}
      />
      <input
        className="w-full p-2 border mb-3"
        type="text"
        name="credits"
        min="1"
        max="10"
        placeholder="Credits"
        value={form.credits}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded"
      >
        {initialData ? "Edit Course" : "Add New Course"}
      </button>
    </form>
  );
}

export default CourseForm;
