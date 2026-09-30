import { repositoryPodcast } from '../repositories/podcast-repository'
import { PodcastTransferModel } from '../models/podcast-transfer-model'
import { statusCode } from '../utils/http-status-code'

export const servicesFilterEpisodes = async (
  podcastName: string | undefined
): Promise<PodcastTransferModel> => {
  //Define contrato de retorno
  let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: []
  }

  //Buscas os dados
  const queryString = podcastName?.split('?p=')[1] ?? ''
  const data = await repositoryPodcast(queryString)

  //Verifico se tem conteudo

  responseFormat = {
    statusCode: data.length !== 0 ? statusCode.OK : statusCode.NO_CONTENT,
    body: data
  }

  // responseFormat.statusCode =
  //   data.length !== 0 ? statusCode.OK : statusCode.NO_CONTENT

  // if (data.length !== 0) {
  //   responseFormat.statusCode = statusCode.OK

  // } else {
  //   responseFormat.statusCode = statusCode.NO_CONTENT
  // }
  responseFormat.body = data

  return responseFormat
}
