import { BigQuery } from '@google-cloud/bigquery'

export const selectBq = async (creds, query) => {
  try {
    const bq = new BigQuery(creds)

    const [job] = await bq
      .createQueryJob({
        query,
      })

    const [rows] = await job.getQueryResults()
    return rows
  } catch (err) {
    throw new Error('SQL query failed.')
  }
}
