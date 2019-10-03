const config = {
    PORT: process.env.PORT || 3000,
    ROOMS_NAMESPACE: '/rooms-ws',
    USERS_NAMESPACE: '/users',
    ORIGINS: process.env.ORIGINS || '*:*',
    KEY: 'unique'
}

export default config
