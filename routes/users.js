var express = require('express');
var router = express.Router();

var user_controller = require("../controllers/userController");

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


//   Get all the users
router.get('/', user_controller.index);

// Create a user
// get create form
router.get('/create', user_controller.user_create_get);
// create user
router.post('/create', user_controller.user_create_post);

// Delete a user
router.get('/:id/delete', user_controller.user_delete)


// Update user
// Get update form
router.get('/:id/edit', user_controller.user_update_get)
router.post('/:id/edit', user_controller.user_update_post)



// Get a single user_controller
router.get('/:id', user_controller.user_detail);



// Delete a user

// Update a user with new info







module.exports = router;
