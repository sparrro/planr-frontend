export const validatePassword = (firstPassword: string, secondPassword: string) => {

    if (firstPassword !== secondPassword) return { success: false, problem: "Passwords do not match" }

    if (firstPassword.length < 20) return { success: false, problem: "Password must be at least 20 characters long" };

    if (firstPassword.toUpperCase() === firstPassword) return { success: false, problem: "Password must contain at least one lower case letter" };

    if (firstPassword.toLowerCase() === firstPassword) return { success: false, problem: "Password must contain at least one upper case letter" };

    if (!/[0-9]/.test(firstPassword)) return { success: false, problem: "Password must contain at least one number" };

    if (!/[^a-zA-Z0-9]/.test(firstPassword)) return { success: false, problem: "Password must contain at least one character that is not alphanumeric ASCII" };

    return { success: true };
};