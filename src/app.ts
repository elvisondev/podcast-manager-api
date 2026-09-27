import * as http from 'http'

import {getFilterEpisdodes, getListEpisodes} from './controllers/podcast-controllers'

import { Routes } from './routes/routes'
import { HttpMethod } from './utils/http-methods'

export const app = async (
  req: http.IncomingMessage, res: http.ServerResponse
) => {
  //queryString = texto pra consulta
  const baseUrl = req.url?.split('?')[0]

  //List podcast
  if (req.method === HttpMethod.GET && baseUrl === Routes.LIST) {
    await getListEpisodes(req, res)
  }

  if (req.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
    await getFilterEpisdodes(req, res)
  }
}
