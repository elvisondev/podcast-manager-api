import { statusCode } from './../utils/http-status-code'
import { PodcastTransferModel } from '../models/podcast-transfer-model'
import { repositoryPodcast } from '../repositories/podcast-repository'

export const servicesListEpisodes = async (): Promise<PodcastTransferModel> => {
  let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: []
  }
  const data = await repositoryPodcast()

  responseFormat = {
    statusCode: data.length !== 0 ? statusCode.OK : statusCode.NO_CONTENT,
    body: data
  }

  return responseFormat
}
