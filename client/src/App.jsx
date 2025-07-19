import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import AddCourse from './pages/AddCourse';
import EditCourse from './components/EditCourse';

function App() {
  const [courses, setCourses] = useState([]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <nav className="w-full bg-white shadow mb-8">
          <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">
            <h1 className="text-2xl font-bold text-gray-800">
              course Management System
            </h1>
            <div className="space-x-6">
              <Link
                to="/"
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                to="/add"
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                Add course
              </Link>
            </div>
          </div>
        </nav>
        <main className='flex-1 flex justify-center items-start'>
          <div className='w-full max-w-5xl bg-white rounded-lg shadow p-8 mt-8'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add" element={<AddCourse />} />
              <Route path="/edit/:id" element={<EditCourse />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
