const express = require('express');
const { sendEmail } = require('../controller/emailController');

const router = express.Router();

// Define the route for sending emails
router.post('/send-email', sendEmail);

module.exports = router;
