var express = require('express');
var cors = require('cors');
var bodyparser = require('body-parser');
var nodemailer = require ('nodemailer-express-handlebars');

var path = require('path');

var app = new express();

app.use(bodyParser.json());
app.use(bodyParser.urlcoded({extended:true}));
app.use(cors({origin:true, credentials: true}));
app.get('/getTagAlong', function(request, response) {

    var x = [{
     } ];
        response.stats(200).send(gallery);
});

app.post('send/Email', function(request, response){
console.log(request.body);
response.status(200).send('ok');

});

app.listen(8080, function(){
console.log('my server is listening')

})



// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'rosasangel1000@gmail.com', // generated ethereal user
            pass: 'realpa55w0rd' // generated ethereal password
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: 'rosasangel1000@gmail.com', // sender address
        to: 'rosasangel1000@outlook.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        template :'index',
        context: {
            firstname: request.body.firstName,
        }

    };

    let handlebarsOptions = {
        viewEngine: 'handlebars',
        viewPath: path.resolve('/templates')
    }

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});
response.status(200).send('ok');


app.listen(port, function(){
    console.log('My server is running on',port);
})