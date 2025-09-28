export const validateSignupForm = (firstName, lastName, mobile, email, password) => {
    const firstNameRegex = /^[A-Z][a-z]{1,29}$/.test(firstName);
    const lastNameRegex = /^[A-Z][a-z]{1,49}$/.test(lastName);
    const mobileRegex = /^[6-9]\d{9}$/.test(mobile);
    const emailRegex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
    const passwordRegex = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);

    if (!firstNameRegex) {
        return "Enter valid First Name ...";
    }
    else if (!lastNameRegex) {
        return "Enter valid Last Name...";
    }
    else if (!mobileRegex) {
        return "Invalid Mobile Number ...";
    }
    else if (!emailRegex) {
        return "Invalid Email Id ...";
    }
    else if (!passwordRegex) {
        return "Invalid Password ...";
    }
    else {
        return null
    }
}