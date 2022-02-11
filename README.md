# bq2slack-github-action
Send slack notification with BQ results.

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
        uses: data-i-consulting/bq2slack-github-action@v1.0.6 # use the latest tag
        with:
          slack_webhook: ${{secrets.SLACK_WEBHOOK}}
          gcp_service_account: ${{secrets.GCP_SERVICE_ACCOUNT}}
          sql: |
            WITH something AS (
              SELECT 1 as my_number
            )

            SELECT * FROM something
```

## Sample output
<img width="722" alt="Screen Shot 2022-02-12 at 2 41 48" src="https://user-images.githubusercontent.com/14939326/153642382-ef30fe8c-005a-48cc-8893-2f8c9eb2c30b.png">

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
