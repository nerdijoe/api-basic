var express = require('express');
var router = express.Router();

var user_controller = require("../controllers/userController");

//   Get all the users
router.get('/', user_controller.index);

// Get a single user_controller
router.get('/:id', user_controller.user_detail);

// Create a user
router.post('/', user_controller.user_create_post);

// Delete a user
router.delete('/:id', user_controller.user_delete)

// Update user
router.put('/:id', user_controller.user_update_post)

module.exports = router;
