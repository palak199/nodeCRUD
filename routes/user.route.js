const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const user_controller = require('../controllers/user.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/', user_controller.get_all);
router.post('/create', user_controller.user_create);
router.get('/:name', user_controller.user_details);
router.delete('/:name/delete', user_controller.user_delete);
router.put('/:name/update', user_controller.user_update);
module.exports = router;
