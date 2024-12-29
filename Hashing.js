const crypto = require('crypto');

function hashString(input) {
    const hash = crypto.createHash('sha256'); // You can use 'sha1', 'md5', etc., but 'sha256' is more secure.
    hash.update(input);
    return hash.digest('hex'); // Returns the hash as a hexadecimal string.
}

// Example usage
const hashedValue = hashString("Hello, World!");
console.log("Hashed Value:", hashedValue);
