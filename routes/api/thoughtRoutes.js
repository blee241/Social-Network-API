const router = require('express').Router();
const {
    getThoughts, 
    getSingleThought, 
    createThought, 
    updateThought, 
    deleteThought, 
    addThoughtReaction, 
    removeThoughtReaction
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought)

// /api/thought/:thoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

module.exports = router;