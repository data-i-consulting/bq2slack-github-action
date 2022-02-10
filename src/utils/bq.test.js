import { selectBq } from "./bq.js"

const creds = {
  client_email: "YOUR_CLIENT_EMAIL",
  private_key: "YOUR_PRIVATE_KEY",
  project_id: "YOUR_PROJECT_ID"
}

test('select from BQ', async () => {
  const data = await selectBq(creds, "SELECT 1 AS something")
  expect(data).toEqual([{ something: 1 }])
})
