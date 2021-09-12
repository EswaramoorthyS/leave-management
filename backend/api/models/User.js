
module.exports = {
    attributes: {
        name: { type: 'string', maxLength: 255 },
        email: { type: 'string', unique: true },
        password: { type: 'string' },
        role: { type: 'string' }
    },
};