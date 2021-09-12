
module.exports = {
    attributes: {
        userId: { type: 'number' },
        startDate: { type: 'string' },
        endDate: { type: 'string' },
        reason: { type: 'string', maxLength: 255 },
        approvel:{ type: 'boolean', defaultsTo: false }
    },
};