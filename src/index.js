import core from '@actions/core'
import { selectBq, sendSlack } from './utils/index.js'

const main = async () => {
  try {
    const webhook = core.getInput('slack_webhook', { required: true })
    const sql = core.getInput('sql', { required: true })
    const credentials = JSON.parse(core.getInput('gcp_service_account', { required: true }))

    const rows = await selectBq(credentials, sql)
    const message = JSON.stringify(rows, null, 2)

    await sendSlack(webhook, message)
  } catch (error) {
    core.setFailed(error.message)
  }
}

main()
