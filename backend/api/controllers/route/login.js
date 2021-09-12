
module.exports = {

    friendlyName: 'Login User ',

    description: 'Login user Detail ',
    inputs: {
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

        var loged = await User.findOne({
            email: inputs.email,
            password: inputs.password,
        })
       
        if (loged !== undefined) {
            return loged;
        } else {
            return this.res.badRequest({
                error: 'Email and password combination do not match',
            });
        }

    }
}