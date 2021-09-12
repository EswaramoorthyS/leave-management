module.exports = {

    friendlyName: 'already approved leave ',

    description: 'approved leave display  ',
    inputs: {
        id: {
            type: "string",
            required: true,
        },

    },

    fn: async function (inputs) {
    
        var approved = await Leave.find({
            where: {
                userId: inputs.id
            }
        })
        return approved;

    }
}