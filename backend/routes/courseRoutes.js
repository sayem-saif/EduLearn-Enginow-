const express = require('express');
const router = express.Router();
const {
  getAllCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
  getCourseStats
} = require('../controllers/courseController');
const { protectRoute, restrictTo } = require('../middleware/authMiddleware');

// Public routes
router.get('/', getAllCourses);
router.get('/:id', getCourse);

// Protected routes (Admin only)
router.post('/', protectRoute, restrictTo('admin'), createCourse);
router.put('/:id', protectRoute, restrictTo('admin'), updateCourse);
router.delete('/:id', protectRoute, restrictTo('admin'), deleteCourse);
router.get('/admin/stats', protectRoute, restrictTo('admin'), getCourseStats);

module.exports = router;
