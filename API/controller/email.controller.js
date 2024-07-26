import nodemailer from 'nodemailer'; 

function sendMailAPI(email,password)  
{
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nr256070@gmail.com',
    pass: 'rpmafrpuginclznr'
  }
});

var mailOptions = {
  from: 'nr256070@gmail.com',
  to: email,
  subject: 'Verification mail',
  html: "<h1>Welcome To ShipMent Hub</h1><p>you have successfully register to our app , your login credentials are attached below</p><h2>Email : "+email+"</h2><h2>Password : "+password+"</h2><h1>Click on the link below to redirect....</h1>http://localhost:3000/verifyuser/"+email
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}

export default sendMailAPI;