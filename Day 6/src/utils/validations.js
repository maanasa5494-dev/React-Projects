export function isValidEmail(email) {
    return email.includes('@');
}

export function isValidPassword(password) {
    return password.length >= 6;
}