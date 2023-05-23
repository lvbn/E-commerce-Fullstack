// set up a Express + TS server:
// https://www.digitalocean.com/community/tutorials/setting-up-a-node-project-with-typescript

import express from 'express'
import cors from 'cors'

import routerRoutes from './routers/index';

export const app = express()
export const port = 3000;

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  // credentials: true,
};

app.use(cors(corsOptions))
app.use(express.json())
app.use(routerRoutes())
