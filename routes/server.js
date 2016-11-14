var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport("SMTP",{
   service: "Gmail",
   auth: {
       user: "conectaclienteenvio@gmail.com",
       pass: "conectacliente"
   }
});

smtpTransport.sendMail({
   from: "S Shivasurya <conectaclienteenvio@gmail.com>", // sender address
   to: "S Shivasurya <bianca.rocha.lol@gmail.com>", // comma separated list of receivers
   subject: "Mail from Nodemailer", // Subject line
   text: "Hello world  - this mail is sent from nodemailer library" // plaintext body
}, function(error, response){
   if(error){
       console.log(error);
   }else{
       console.log("Mail sent: " + response.message);
   }
});
