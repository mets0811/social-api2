const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');

// /api/thoughts
router.route("/")
  .get(getAllThoughts)
  .post(addThought)

// /api/thoughts/<thoughtId>
router.route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought)

// /api/thoughts/<thoughtId>/reactions
router.route('/:thoughtId/reactions')
  .post(addReaction)
  .delete(removeReaction)

// // /api/thoughts/<userId>
// router.route('/:userId').post(addThought);

// // /api/thoughts/<userId>/<thoughtId>
// router
//   .route('/:userId/:thoughtId')
//   .put(addReaction)
//   .delete(removeThought);

// // /api/thoughts/<userId>/<thoughtId>/<reactionId>
// router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;
