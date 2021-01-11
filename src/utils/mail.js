var mailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');

var smtpTransport = mailer.createTransport({
    host: "smtp.gmail.com",
    secureConnection: false,
    port: 587,
    requiresAuth: true,
    domains: ["gmail.com", "googlemail.com"],
    auth: {
        user: "testemail@emaconsultancy.nl", 
        pass: "ematest123"
    }
});  

module.exports = {

    sendWelcomEmail( user ) {

        var verificationURL = `http://24.132.2.185:5000/api/verifyemail/${user.verifyToken}`;
        var html_body = `<p>Verify url ${verificationURL} </p>`;

        const mailOptions = {
            from: 'testemail@emaconsultancy.nl', // sender address
            to: 'rgeworkan@gmail.com',           // list of receivers
            subject: 'Welcome to Jimploy!',      // Subject line
            html: html_body                      // plain text body
        };

        smtpTransport.sendMail(mailOptions, function (err, info) {
            if(err){ 
              console.log(err)
            } else {
              console.log(info);
            };
         });
    },

    sendVerifyEmail( user ) {

    }
}