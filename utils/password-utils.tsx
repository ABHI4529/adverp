// passwordUtils.js

/**
 * Check if the password contains at least one uppercase letter.
 */
export function isUpperCase(password : any) {
    return /[A-Z]/.test(password);
}

/**
 * Check if the password contains at least one lowercase letter.
 */
export function isLowerCase(password : any) {
    return /[a-z]/.test(password);
}

/**
 * Check if the password contains at least one digit.
 */
export function isDigit(password : any) {
    return /\d/.test(password);
}

/**
 * Check if the password contains at least one special character.
 * You can customize the special character pattern as needed.
 */
export function isSpecialCharacter(password : any) {
    // Assuming special characters are defined as non-alphanumeric characters
    return /[!@#$%^&*(),.?":{}|<>]/.test(password);
}
