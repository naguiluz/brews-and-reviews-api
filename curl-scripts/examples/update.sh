#!/bin/bash

API="http://localhost:4741"
URL_PATH="/beers"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
    "beer": {
      "name": "'"${NAME}"'",
      "brewery": "'"${BREWERY}"'",
      "type": "'"${TYPE}"'",
      "rating": "'"${RATING}"'",
      "description": "'"${DESCRIPTION}"'"
    }
  }'

echo
