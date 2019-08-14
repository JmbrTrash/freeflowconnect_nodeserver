
const CONFIG = {
    PORT: process.env.PORT || 3000,
    ROOMS_NAMESPACE: '/rooms',
    USERS_NAMESPACE: '/users',
    ORIGINS: process.env.ORIGINS || 'freeflowconnect.com',
    KEY: 'unique'
}

module.exports = CONFIG