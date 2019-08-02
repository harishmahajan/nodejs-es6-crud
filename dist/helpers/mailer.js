"use strict";

var nodemailer = require('nodemailer');

var config = require('../config');

exports.sentMail = function (mail) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  nodemailer.createTestAccount(function (err, account) {
    var transporter = nodemailer.createTransport({
      host: config.smtp_details.host,
      port: config.smtp_details.port,
      auth: {
        user: config.smtp_details.email,
        pass: config.smtp_details.password
      },
      authMethod: config.smtp_details.authMethod,
      secure: false,
      tls: {
        rejectUnauthorized: false
      },
      debug: true
    });
    var mailOptions = {
      from: config.mailOptions.from,
      // sender address
      to: mail.reciever,
      // list of receivers
      subject: mail.subject,
      // Subject line
      //text: body.text, // plain text body
      html: mail.htmlTemplate // html body

    }; // send mail with defined transport object

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return console.log(error);
      }

      console.log('Message sent: %s', info.messageId); // Preview only available when sending through an Ethereal account

      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info)); // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
  });
};