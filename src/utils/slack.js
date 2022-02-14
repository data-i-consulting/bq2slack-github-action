import axios from 'axios'

export const sendSlack = async (webhook, message) => {
  try {
    if (!webhook) throw new Error('Missing webhook URL')

    await axios.post(webhook, message)
  } catch (e) {
    throw new Error(e)
  }
}

export const formatMessage = (rows) => {
  let message = {
    blocks: [
      {
        type: "context",
        elements: [
          {
            type: "mrkdwn",
            text: `:spiral_calendar_pad: Date: *${new Date().toISOString().slice(0, 16).replace("T", " ")}*`
          }
        ]
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "Notification from bq2slack\n\n *Query Results*"
        }
      },
      {
        type: "divider"
      },
    ]
  }

  for (const row of rows) {

    // loop for columns
    Object.entries(row).forEach(([key, value]) => {
      message.blocks.push(
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: key
            },
            {
              type: "mrkdwn",
              text: value.toLocaleString()
            }
          ]
        },
      )
    })

    message.blocks.push(
      {
        type: "divider"
      }
    )
  }

  return message
}
