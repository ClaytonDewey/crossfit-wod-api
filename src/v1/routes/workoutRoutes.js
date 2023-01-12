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

router.patch('/:workoutId', workoutController.updateOneWorkout);

router.delete('/:workoutId', workoutController.deleteOneWorkout);

module.exports = router;
