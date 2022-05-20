const router = require('express').Router();
const {
  getAllThoughts,
  createThought,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');

// /api/thoughts
router.route("/")
  .get(getAllThoughts)
  .post(createThought)

// /api/thoughts/<thoughtId>
router.route('/:thoughtId')
  .post(addThought)
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
