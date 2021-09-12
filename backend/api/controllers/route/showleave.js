
module.exports = {

    friendlyName: 'User leave Detail ',

    description: 'display the leaves by not aproved  ',
    inputs: {

    },

    fn: async function (inputs) {

        var showLeave = await Leave.find({
            where:{
                approvel:false
            }
        });

        return showLeave;

    }
}