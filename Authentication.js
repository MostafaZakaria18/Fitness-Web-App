const crypto = require('crypto');

// Helper: Hashing Function
function hashString(input) {
    const hash = crypto.createHash('sha256');
    hash.update(input);
    return hash.digest('hex');
}

// Example User Data (Simulated Database)
const users = [
    { username: "admin", password: hashString("adminPass"), role: "admin" },
    { username: "user", password: hashString("userPass"), role: "user" }
];

/**
 * Authentication Function
 * @param {string} username - The username provided by the user.
 * @param {string} password - The plain-text password provided by the user.
 * @returns {object} - Authentication result including success, message, and role if authenticated.
 */
function authenticate(username, password) {
    const hashedPassword = hashString(password);
    const user = users.find(u => u.username === username && u.password === hashedPassword);

    if (!user) {
        return { success: false, message: "Invalid credentials" };
    }

    return {
        success: true,
        message: `Welcome, ${user.username}`,
        role: user.role
    };
}

/**
 * Authorization Function
 * @param {string} userRole - The role of the authenticated user.
 * @param {string} requiredRole - The role required for the resource or action.
 * @returns {object} - Authorization result including success and message.
 */
function authorize(userRole, requiredRole) {
    if (userRole !== requiredRole) {
        return { success: false, message: "Access denied" };
    }
    return { success: true, message: "Access granted" };
}

// Example Usage of Authentication and Authorization
const username = "admin";
const password = "adminPass";

// Authenticate the user
const authResult = authenticate(username, password);
console.log("Authentication Result:", authResult);

if (authResult.success) {
    // Authorize the user
    const requiredRole = "admin";
    const authzResult = authorize(authResult.role, requiredRole);
    console.log("Authorization Result:", authzResult);
} else {
    console.log("Authentication failed. Cannot proceed with authorization.");
}
