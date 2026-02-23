const express = require('express');
const router = express.Router();
const {
  enrollCourse,
  getMyEnrollments,
  getEnrollment,
  updateProgress,
  getAllEnrollments,
  deleteEnrollment
} = require('../controllers/enrollmentController');
const { protectRoute, restrictTo } = require('../middleware/authMiddleware');

// All routes are protected
router.use(protectRoute);

// Student routes
router.post('/', enrollCourse);
router.get('/me', getMyEnrollments);
router.get('/:id', getEnrollment);
router.put('/:id/progress', updateProgress);
router.delete('/:id', deleteEnrollment);

// Admin routes
router.get('/', restrictTo('admin'), getAllEnrollments);

module.exports = router;
