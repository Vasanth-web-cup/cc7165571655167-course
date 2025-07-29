import { Link } from 'react-router-dom';

function CourseCard({ course, onDelete }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 text-gray-800">
      <h2 className="text-xl font-semibold">Name:{course.courseName}</h2>
      <p ><strong>Course Code: </strong>{course.courseCode}</p>
      <p ><strong>Instructor :</strong> {course.instructor}</p>
      <p><strong> Credits    : </strong> {course.credits}</p>
      
      <div className='mt-4 flex justify-between'>
        <Link
          onClick={() => navigate(`/edit/${course.id}`)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-4 py-2 rounded shadow"

        >
          Edit
        </Link>

        <button
          onClick={() => onDelete(course.id)}
          className=" text-white px-3 py-1 rounded bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default CourseCard;
