const readline = require('readline');
const sgMail = require('@sendgrid/mail');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

sgMail.setApiKey('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');

function generateOTP(length) {
  let otp = '';
  const digits = '0123456789';
  for (let i = 0; i < length; i++) {
    otp += digits[Math.floor(Math.random() * 10)];
  }
  return otp;
}

async function sendOTPEmail(email, otp) {
  const msg = {
    to: email,
    from: 'youssef.16jan@gmail.com', 
    subject: 'Your OTP Code',
    text: `Your OTP is: ${otp}`
  };

  try {
    await sgMail.send(msg);
    console.log(`OTP sent to ${email}`);
  } catch (error) {
    console.error('Error sending email:', error.response ? error.response.body : error);
  }
}

function validateOTP(inputOTP, generatedOTP) {
  return inputOTP === generatedOTP;
}

const otpLength = 6;
const generatedOTP = generateOTP(otpLength);
const userEmail = 'youssefjan010@gmail.com'; 

sendOTPEmail(userEmail, generatedOTP);

rl.question("Enter the OTP sent to your device: ", (userInput) => {
  if (validateOTP(userInput.trim(), generatedOTP)) {
    console.log("OTP validated successfully. Access granted!");
  } else {
    console.log("Invalid OTP. Access denied.");
  }
  rl.close();
});
