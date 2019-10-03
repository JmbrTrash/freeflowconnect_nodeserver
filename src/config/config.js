const config = {
    PORT: process.env.PORT || 3000,
    ROOMS_NAMESPACE: '/rooms-ws',
    USERS_NAMESPACE: '/users',
    ORIGINS: process.env.ORIGINS || 'threebot.jimber.org',
    KEY: 'unique'
}

export default config
