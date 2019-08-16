import express from 'express'
import http from 'http'

import config from './config/config'

import configureApiAndSetupRoutes from './http/configure'
import configureSocketIOAndSetupEvents from './socketio/configure'

const app = express()
const server = http.createServer(app)

configureApiAndSetupRoutes(app, server, config)
configureSocketIOAndSetupEvents(server, config)