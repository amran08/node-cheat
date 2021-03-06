
const express = require('express');
const postsController = require('../../controllers/front-end/posts');

// Express router
const router = express.Router();

// Get Posts
router.get('/', postsController.getPosts);

// Get Single Post
router.get('/:id', postsController.getSinglePost);

// Get Single Post
router.delete('/:id', postsController.deleteSinglePost);

module.exports = router;
