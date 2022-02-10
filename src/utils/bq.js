import { BigQuery } from '@google-cloud/bigquery'

export const selectBq = async (serviceAccount, query) => {
  try {
    const { client_email, private_key, project_id: projectId } = serviceAccount

    const options = {
      projectId,
      credentials: { client_email, private_key }
    }

    const bq = new BigQuery(options)

    const [job] = await bq
      .createQueryJob({
        query,
      })

    const [rows] = await job.getQueryResults()
    return rows
  } catch (e) {
    throw new Error(e.message)
  }
}
