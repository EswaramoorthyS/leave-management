module.exports = {

    friendlyName: 'Register User Detail ',

    description: 'User Detail for registeration  ',
    inputs: {
        name: {
            type: "string",
            required: true,
        },
        email: {
            type: "string",
            required: true,
        },
        password: {
            type: "string",
            required: true,
        },
    },

    fn: async function (inputs) {

     await User.create({
            name: inputs.userName,
            email: inputs.email,
            password: inputs.password,
            role:'user',
        })

        return (200, {
            success: true
        });

    }
}