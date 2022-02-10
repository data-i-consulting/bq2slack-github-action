import axios from 'axios'

export const sendSlack = async (webhook, message) => {
  try {
    if (!webhook) throw new Error('Missing webhook URL')

    await axios.post(webhook, { text: message })
  } catch (e) {
    throw new Error(e)
  }
}
