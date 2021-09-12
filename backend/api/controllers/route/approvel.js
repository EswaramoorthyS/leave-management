
module.exports = {

    friendlyName: 'Approve leave ',

    description: 'manager approves user leaves ',
    inputs: {
        id: {
            type: "number",
            required: true,
        },
    },

    fn: async function (inputs) {

        var approve = await Leave.updateOne({
            where: {
                id: inputs.id
            }
        }).set({
            approvel: true
        })

        return ({
            success:true,
        });

    }
}