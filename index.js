const dotenv = require('dotenv');
dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

// console.log(accountSid,'*****',authToken)

client.messages.create({
    body:'This is for MLH - DAY 3 !!',
    from: '+12059843455',
    to: process.env.MY_PHONE
})
.then((message)=>console.log(message))
.catch((err)=>console.log(err))