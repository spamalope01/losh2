var express = require('express');
var nodemailer = require('nodemailer');
var app = express();
var smtpTransport = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  auth: {
    user: "spamalope01@gmail.com",
    pass: "pap17031017"
  }
})
var port = process.env.PORT || 9000;

app.use(express.static(__dirname + '/app'));


app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/send', function(req, res) {
  console.log('in the send');
  console.log('req', req);
  var mailOptions={
    to : "spamalope01@gmail.com",
    from: req.query.sender,
    phone: req.query.phone,
    email: req.query.email,
    text : req.query.text
  }
  console.log('mailOptions', mailOptions);
  smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
      console.log('there was a problem', error);
      res.end("error");
    }else{
      console.log("Message sent: " + response.message);
      res.end("sent");
    }
  });
});

app.listen(port, function(){
  console.log('Listening on port:', port);
});
