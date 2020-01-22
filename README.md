# Trampo Certo Rating

[![CircleCI](https://circleci.com/gh/fabioaromanini/trampo-certo-rating.svg?style=svg)](https://circleci.com/gh/fabioaromanini/trampo-certo-rating)

Rest API that allows fake rates retrieval for valid CPFs (SSN-like document for brazilians).

Query Endpoint

https://qvdbscsen0.execute-api.us-east-1.amazonaws.com/prod/cpf_query?cpf=<CPF_NUMBER>

Expected Response:

```json
{
  "cpf": "<CPF-NUMBER>",
  "ratings": "good|bad|unknown"
}
```

_This rating is completely random_

## TODO

**Core**

- ~~Add serverless config~~
- Endpoint for querying CPF random rates

**Extra**

- Validate CPF number with third-party lib
- Persist rates in DynamoDB table
- Endpoint for rates update/creation
- Persist rates queries in DynamoDB
- ~~Automate deploys with circle-ci~~

## Done

1. Add serverless config
2. Automate deploys with circle-ci
