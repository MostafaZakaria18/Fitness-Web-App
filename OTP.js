const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function generateOTP(length) {
  let otp = '';
  const digits = '0123456789';
  for (let i = 0; i < length; i++) {
    otp += digits[Math.floor(Math.random() * 10)];
  }
  return otp;
}

function sendOTP(otp) {
  console.log("Your OTP is: " + otp);
}

function validateOTP(inputOTP, generatedOTP) {
  return inputOTP === generatedOTP;
}

const otpLength = 6;
const generatedOTP = generateOTP(otpLength);

sendOTP(generatedOTP);

rl.question("Enter the OTP sent to your device: ", (userInput) => {
  if (validateOTP(userInput.trim(), generatedOTP)) {
    console.log("OTP validated successfully. Access granted!");
  } else {
    console.log("Invalid OTP. Access denied.");
  }
  rl.close();
});
