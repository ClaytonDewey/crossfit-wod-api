const express = require('express');
const workoutController = require('../../controllers/workoutController');
const recordController = require('../../controllers/recordController');
const memberController = require('../../controllers/memberController');

const router = express.Router();

router.get('/', workoutController.getAllWorkouts);
router.get('/records', recordController.getAllRecords);
router.get('/members', memberController.getAllMembers);
router.get('/:workoutId', workoutController.getOneWorkout);
router.get('/:workoutId/records', recordController.getRecordForWorkout);
router.get('/members/:memberId', memberController.getOneMember);

router.post('/', workoutController.createNewWorkout);
router.post('/member', memberController.createNewMember);

router.patch('/:workoutId', workoutController.updateOneWorkout);
router.patch('/members/:memberId', memberController.updateOneMember);

router.delete('/:workoutId', workoutController.deleteOneWorkout);
router.delete('/members/:memberId', memberController.deleteOneMember);

module.exports = router;
