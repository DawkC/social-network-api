const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction } = require('../../controllers/thought-controller');

router
    .route("/")
    .get(getAllThoughts);    

router
    .route('/:Id')
    .get(getThoughtById)
    .post(addThought)
    .put(updateThought);

router
    .route('/:userId/:thoughtId')
    .get(getThoughtById)
    .delete(deleteThought);

router
    .route('/:thoughtId/reactions')
    .post(addReaction);

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router;