async function handle() {
    let characters = [];
    let password = "";

    const passwordLength = parseInt(process.env.PASSWORD_LENGTH);

    // Os ifs irão checar o que pode entrar na lista characters
    if (process.env.UPPERCASE_LETTERS === "true") {
        characters.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }

    if (process.env.LOWERCASE_LETTERS === "true") {
        characters.push(..."abcdefghijklmnopqrstuvwxyz");
    }

    if (process.env.NUMBERS === "true") {
        characters.push(..."0123456789");
    }

    if (process.env.SPECIAL_CHARACTERS === "true") {
        characters.push(..."!@#$%^&*()_+[]{}|;:,.<>?");
    }

    for (let i = 0; i < passwordLength; i++) {
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }

    return password;

}

export default handle;