const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getUser,
  updateUserRole,
  deleteUser,
  getPlatformStats
} = require('../controllers/userController');
const { protectRoute, restrictTo } = require('../middleware/authMiddleware');

// All routes are admin-only
router.use(protectRoute, restrictTo('admin'));

router.get('/', getAllUsers);
router.get('/stats/platform', getPlatformStats);
router.get('/:id', getUser);
router.put('/:id/role', updateUserRole);
router.delete('/:id', deleteUser);

module.exports = router;
