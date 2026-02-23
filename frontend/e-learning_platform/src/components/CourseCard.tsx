import React from 'react';
import { Link } from 'react-router-dom';

interface Course {
  _id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  category: string;
  difficulty: string;
  thumbnail: string;
  instructor: string;
  enrollmentCount: number;
  rating: number;
}

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <Link to={`/courses/${course.slug}`} className="card block hover:shadow-xl transition transform hover:-translate-y-1">
      <img
        src={course.thumbnail}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold px-2 py-1 bg-primary-100 text-primary-600 rounded">
            {course.category}
          </span>
          <span className="text-xs text-gray-500">{course.difficulty}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{course.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">By {course.instructor}</span>
          <span className="text-lg font-bold text-primary-600">${course.price}</span>
        </div>
        <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
          <span>{course.enrollmentCount} students</span>
          <span>⭐ {course.rating > 0 ? course.rating.toFixed(1) : 'New'}</span>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
