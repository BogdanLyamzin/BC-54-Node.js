const createUser = (name, lastName) => {
    return {
        name,
        lastName,
        fullName: `${name} ${lastName}`,
    }
}

module.exports = createUser;