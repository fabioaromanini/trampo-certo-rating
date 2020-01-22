# Trampo Certo Rating

[![CircleCI](https://circleci.com/gh/fabioaromanini/trampo-certo-rating.svg?style=svg)](https://circleci.com/gh/fabioaromanini/trampo-certo-rating)

Rest API for retrieving fake CPFs ratings (CPF is a SSN-like document for brazilians).

### Endpoints

**CPF Query**

GET
https://fpzksjskka.execute-api.us-east-1.amazonaws.com/prod/cpf_query?cpf=<CPF_NUMBER>&history=true

Expected Response:

if history set to false or undefined

```json
{
  "cpf": "<CPF-NUMBER>",
  "rating": "good|bad|unknown"
}
```

if history is set to true

```json
{
  "cpf": "<CPF-NUMBER>",
  "rating": [
    {
      "rating": "bad|good",
      "createdAt": "ISO DATE"
    },
    {
      "rating": "good|bad",
      "createdAt": "ISO DATE"
    },
    {
      "rating": "good|bad",
      "createdAt": "ISO DATE"
    }
  ]
}
```

**Set Ratings for CPF**

POST
https://fpzksjskka.execute-api.us-east-1.amazonaws.com/prod/ratings

Expected input:

```json
{
  "cpf": "<CPF-NUMBER>",
  "ratings": "good|bad"
}
```

Expected Response is status code 201

## TODO

**Core**

- ~~Add serverless config~~
- ~~Endpoint for querying CPF random rates~~

**Extra**

- Validate CPF number with third-party lib
- Persist rates queries in DynamoDB
- ~~Automate deploys with circle-ci~~
- ~~Persist rates in DynamoDB table~~
- ~~Endpoint for rates update/creation~~
- ~~Persist and list rates history by CPF

## Done

1. Add serverless config
2. Automate deploys with circle-ci
3. Endpoint for querying CPF random rates
4. Persist rates in DynamoDB table
5. Endpoint for rates update/creation
6. Persist and list rates history by CPF
