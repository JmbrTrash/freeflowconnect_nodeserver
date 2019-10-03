import express from 'express'
import http from 'http'

import config from './config/config'

import configureApiAndSetupRoutes from './http/configure'
import configureSocketIOAndSetupEvents from './socketio/configure'

const app = express()
app.all("/", function(req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Headers", "X-Requested-With");
})
const server = http.createServer(app)

configureApiAndSetupRoutes(app, server, config)
configureSocketIOAndSetupEvents(server, config)
