import fs from 'fs'
import path from 'path'

import {PodcastModel} from '../models/podcast-model'
import { Paths } from '../routes/routes-paths';

// TODO Uso o path.join pra apontar o caminho do arquivo, e uso o __dirname, "local do arquivo" pra ter ele em qualquer máquina dinamicamente
const pathData = path.join(__dirname, Paths.PODCAST)

export const repositoryPodcast = async (
  podcastName?: string
): Promise<PodcastModel[]> => {
  const language = "utf-8"
  
  const rawData = fs.readFileSync(pathData, language)
  let jsonFile = JSON.parse(rawData)
  
  if (podcastName) {
    jsonFile = jsonFile.filter(
      (podcast: PodcastModel) => podcast.podcastName === podcastName
    )
  }

 
  return jsonFile
}
