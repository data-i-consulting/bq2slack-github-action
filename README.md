# bq2slack-github-action
Send slack notification with BQ results.
It simply uses JSON.stringify to send results.
Bare minimum implementation, please don't complain.

## How to use

### Sample github actions workflow yaml

```yaml
name: Run SQL against BQ and notify slack
on:
  schedule:
    - cron:  '0 10 * * *' # run every day at 10:00

jobs:
  bq2slack:
    runs-on: ubuntu-latest
    name: Execute SQL query and send results to Slack
    steps:
      - name: Run
        uses: data-i-consulting/bq2slack-github-action@v1.0.5 # use the latest tag
        with:
          slack_webhook: ${{secrets.SLACK_WEBHOOK}}
          gcp_service_account: ${{secrets.GCP_SERVICE_ACCOUNT}}
          sql: |
            WITH something AS (
              SELECT 1 as my_number
            )

            SELECT * FROM something
```

## Development
```bash
npm i
npm run start
```

## Build
```bash
npm i
npm run build
```
