const nodemailer = require('nodemailer');

// Create a transporter
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Replace with your SMTP server
    port: 587, // Replace with the appropriate port
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'code2024wave@gmail.com', // Replace with your email
        pass: 'mrxj jdsg vejg apwi', // Replace with your email password or app password
    },
});

const sendEmail = (req, res) => {
    const { teacher_name, your_name, age, email, date, inquiry } = req.body;

    const mailOptions = {
        from: 'code2024wave@gmail.com', // Sender address
        to: email, // List of recipients
        subject: `Appointment from ${your_name}`, // Subject line
        text: `
            Teacher Name: ${teacher_name}
            Your Name: ${your_name}
            Age: ${age}
            Email: ${email}
            Date: ${date}
            Inquiry: ${inquiry}
        `, // Plain text body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Email sending error:', error);
            return res.status(500).send('Failed to send email');
        }
        res.status(200).send('Email sent successfully');
    });
};

module.exports = { sendEmail };
