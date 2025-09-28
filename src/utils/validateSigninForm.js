export const validateSigninForm = (email, password) => {
    const emailRegex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
    const passwordRegex = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);

    if (!emailRegex) {
        return "Invalid Email Id ...";
    }
    else if (!passwordRegex) {
        return "Invalid Password ...";
    }
    else {
        return null
    }
}