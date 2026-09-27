import { IncomingMessage, ServerResponse } from 'http'

import { servicesListEpisodes } from '../services/list-episodes-service'
import { servicesFilterEpisodes } from '../services/filter-episodes-services'

import { ContentType } from '../utils/content-type';
import { PodcastTransferModel } from '../models/podcast-transfer-model';

const DEFAULT_CONTENT = { 'Content-Type': ContentType.JSON }


export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content: PodcastTransferModel = await servicesListEpisodes();

  res.writeHead(content.statusCode, DEFAULT_CONTENT);
  res.write(JSON.stringify(content.body));

  res.end();
;}

export const getFilterEpisdodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  //Tipando o meu content 
  const content: PodcastTransferModel = await servicesFilterEpisodes(req.url);

  res.writeHead(content.statusCode, DEFAULT_CONTENT);
  res.write(JSON.stringify(content.body));

  res.end();
};
