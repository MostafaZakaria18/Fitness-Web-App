const crypto = require('crypto');

function encrypt(text, secretKey) {
    const iv = crypto.randomBytes(16); // Initialization vector
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(secretKey, 'hex'), iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return {
        iv: iv.toString('hex'),
        encryptedData: encrypted
    };
}

function decrypt(encryptedData, secretKey, iv) {
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(secretKey, 'hex'), Buffer.from(iv, 'hex'));
    let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

// Example usage
const secretKey = crypto.randomBytes(32).toString('hex'); // Generate a 256-bit key
const text = "Hello, World!";
const encrypted = encrypt(text, secretKey);
console.log("Encrypted:", encrypted);

const decrypted = decrypt(encrypted.encryptedData, secretKey, encrypted.iv);
console.log("Decrypted:", decrypted);
