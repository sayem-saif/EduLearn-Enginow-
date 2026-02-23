import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { courseAPI, enrollmentAPI } from '../utils/api';
import { useAuth } from '../context/AuthContext';

interface Lesson {
  _id: string;
  title: string;
  content: string;
  videoUrl?: string;
  duration: number;
  order: number;
}

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
  lessons: Lesson[];
  duration: number;
  enrollmentCount: number;
  rating: number;
}

const CourseDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [enrolling, setEnrolling] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCourse();
  }, [slug]);

  const fetchCourse = async () => {
    try {
      const response = await courseAPI.getOne(slug!);
      setCourse(response.data.course);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to load course');
    } finally {
      setLoading(false);
    }
  };

  const handleEnroll = async () => {
    if (!user) {
      navigate('/login');
      return;
    }

    setEnrolling(true);
    try {
      await enrollmentAPI.enroll(course!._id);
      alert('Successfully enrolled! Go to Dashboard to start learning.');
      navigate('/dashboard');
    } catch (err: any) {
      alert(err.response?.data?.message || 'Enrollment failed');
    } finally {
      setEnrolling(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error || 'Course not found'}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                  {course.category}
                </span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                  {course.difficulty}
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-lg mb-4">{course.description}</p>
              <div className="flex items-center space-x-6 text-sm">
                <span>👤 {course.instructor}</span>
                <span>👥 {course.enrollmentCount} students</span>
                <span>⭐ {course.rating > 0 ? course.rating.toFixed(1) : 'New'}</span>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-lg shadow-xl p-6 text-gray-900">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="text-3xl font-bold text-primary-600 mb-4">
                  ${course.price}
                </div>
                <button
                  onClick={handleEnroll}
                  disabled={enrolling}
                  className="w-full btn-primary disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {enrolling ? 'Enrolling...' : 'Enroll Now'}
                </button>
                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-semibold">{course.duration || 'N/A'} hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lessons:</span>
                    <span className="font-semibold">{course.lessons.length}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Video Preview */}
        {course.lessons.length > 0 && course.lessons[0].videoUrl && (
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Course Preview</h2>
            <div className="aspect-video w-full bg-gray-900 rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src={course.lessons[0].videoUrl}
                title={course.lessons[0].title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold text-lg">{course.lessons[0].title}</h3>
              <p className="text-gray-600 mt-2">{course.lessons[0].content}</p>
            </div>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">Course Content</h2>
          {course.lessons.length === 0 ? (
            <p className="text-gray-600">No lessons available yet.</p>
          ) : (
            <div className="space-y-3">
              {course.lessons
                .sort((a, b) => a.order - b.order)
                .map((lesson, index) => (
                  <div
                    key={lesson._id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-center space-x-4">
                      <span className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-semibold">
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="font-semibold">{lesson.title}</h3>
                        <p className="text-sm text-gray-500 mt-1 max-w-2xl">{lesson.content}</p>
                        {lesson.duration && (
                          <span className="text-sm text-gray-500 mt-1">⏱️ {lesson.duration} min</span>
                        )}
                        {lesson.videoUrl && (
                          <span className="text-sm text-primary-600 ml-2">🎥 Video Included</span>
                        )}
                      </div>
                    </div>
                    <span className="text-gray-400">🔒</span>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
