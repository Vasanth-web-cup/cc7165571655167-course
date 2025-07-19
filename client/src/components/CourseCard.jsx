import { Link } from 'react-router-dom';

function CourseCard({ course, onDelete }) {
  return (
    <div className="border p-4 rounded shadow bg-white w-64 text-black">
      <h2 className="text-lg font-bold mb-2">{course.courseName}</h2>
      <p className="mb-1">Course Code: {course.courseCode}</p>
      <p className="mb-1">Instructor: {course.instructor}</p>
      <p>Credits: {course.credits}</p>
      
      <div className='mt-4 flex justify-between'>
        <Link
          to={`/edit/${course.id}`}
          className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          Edit
        </Link>

        <button
          onClick={() => onDelete(course.id)}
          className="text-red-600 hover:text-red-800 font-medium"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default CourseCard;
