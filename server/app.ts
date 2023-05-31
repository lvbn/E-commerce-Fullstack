// set up a Express + TS server:
// https://www.digitalocean.com/community/tutorials/setting-up-a-node-project-with-typescript

export const stripe = require('stripe')('sk_test_51N8hjDJKkXA9mV6apEXVLA7cSwFX08ThCvmgeiduWpUZSFfAfQhR9Qnr2cfHh2SLJHunxIUoSS31fEBR5d6hlsnW00DqapAgUi');
import express from 'express'
import cors from 'cors'
require('dotenv').config();

import routerRoutes from './routers/index';

export const app = express()
// export const port = 3000;
// export const port = process.env.PORT
export const port = process.env.PORT || "8080";

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  // credentials: true,
};

app.use(cors(corsOptions))
app.use(express.json())
app.use(routerRoutes())
