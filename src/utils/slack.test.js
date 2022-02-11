import { formatMessage, sendSlack } from "./slack.js"

const webhookUrl = "YOUR_SLACK_WEBHOOK_URL"
const dummyData = [
  {
    "Date": "2022-02-12",
    "Visitors": 345,
    "Emails": 4293,
    "Phone calls": 137
  }, {
    "Date": "2022-02-11",
    "Visitors": 237,
    "Emails": 5843,
    "Phone calls": 148
  }
]

test('format data and send Slack message', async () => {
  const message = formatMessage(dummyData)
  console.log(JSON.stringify(message))
  sendSlack(webhookUrl, message)
})
