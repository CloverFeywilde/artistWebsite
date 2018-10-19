var nodemailer = require('nodemailer');
var toField, messageField, subjectField;

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'taraseedserver@gmail.com',
		pass: 'Winner04!'
	}
});

var mailOptions = {
	from: 'taraseedserver@gmail.com',
	to: toField,
	subject: subjectField,
	text: messageField
};




function analDomination(){
  toField = document.getElementById("emailInput").value;
  messageField = document.getElementById("messageInout").value;
  subjectField = document.getElementById("subjectInput").value;

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    }
    else {
      console.log('Email sent: ' + info.response);
    }
  });
  
}
