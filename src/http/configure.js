import cors from 'cors'
import bodyParser from 'body-parser'

import routes from './routes/routes'

function configureApiAndSetupRoutes(app, server, config) {
    app.use(cors({credentials: true, origin: "*"}))
    app.use(bodyParser.json())

    routes(app)

    server.listen(config.PORT, () => {
        console.log(`http server is listening on port ${config.PORT}`)
    })
}

export default configureApiAndSetupRoutes
