module.exports = {

    friendlyName: 'User apply leave ',

    description: 'User apply leave with date and reason ',
    inputs: {
        userId: {
            type: "string",
            required: true,
        },
        startDate: {
            type: "string",
            required: true,
        },
        endDate: {
            type: "string",
            required: true,
        },
        reason: {
            type: "string",
            required: true,
        },

    },

    fn: async function (inputs) {
        
        var apply = await Leave.create({
            userId: inputs.userId,
            startDate: inputs.startDate,
            endDate: inputs.endDate,
            reason: inputs.reason,
        }).fetch();

        return apply;

    }
}