import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { enrollmentAPI } from '../utils/api';

interface Enrollment {
  _id: string;
  courseId: {
    _id: string;
    title: string;
    slug: string;
    description: string;
    thumbnail: string;
    instructor: string;
    difficulty: string;
    category: string;
  };
  progress: {
    percentage: number;
    completedLessons: string[];
  };
  enrolledAt: string;
  status: string;
}

const Dashboard: React.FC = () => {
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchEnrollments();
  }, []);

  const fetchEnrollments = async () => {
    try {
      const response = await enrollmentAPI.getMyEnrollments();
      setEnrollments(response.data.enrollments);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to load enrollments');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">My Learning</h1>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        {enrollments.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <p className="text-xl text-gray-600 mb-4">You haven't enrolled in any courses yet</p>
            <Link to="/courses" className="btn-primary">
              Browse Courses
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {enrollments.map((enrollment) => (
              <div key={enrollment._id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/4">
                    <img
                      src={enrollment.courseId.thumbnail}
                      alt={enrollment.courseId.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-3/4">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h2 className="text-2xl font-bold mb-2">
                          {enrollment.courseId.title}
                        </h2>
                        <p className="text-gray-600 mb-2">{enrollment.courseId.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>By {enrollment.courseId.instructor}</span>
                          <span>•</span>
                          <span>{enrollment.courseId.category}</span>
                          <span>•</span>
                          <span>{enrollment.courseId.difficulty}</span>
                        </div>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          enrollment.status === 'completed'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        {enrollment.status}
                      </span>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Progress</span>
                        <span className="text-sm font-semibold text-primary-600">
                          {enrollment.progress.percentage}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-primary-600 h-2 rounded-full transition-all"
                          style={{ width: `${enrollment.progress.percentage}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <Link
                        to={`/courses/${enrollment.courseId.slug}`}
                        className="btn-primary"
                      >
                        {enrollment.progress.percentage === 0 ? 'Start Learning' : 'Continue Learning'}
                      </Link>
                      <Link
                        to={`/courses/${enrollment.courseId.slug}`}
                        className="btn-secondary"
                      >
                        View Course
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
