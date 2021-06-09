## GraphQL Example

### Instructions:
> *Tested locally with NodeJS version `v14.16.1`*

1. Pull the repo
2. `cd gql-example`
3. `npm install` (or `yarn install`)
4. `node src/index.js`
5. You should see `Running a GQL Server at http://localhost:3000` in your terminal, along with the printed GraphQL schema
6. To get continents data from [https//countries.trevorblades.com](https//countries.trevorblades.com):
```
curl -d '{ "query": "{ getContinents { data }}" }' -H "Content-Type: application/json" -X POST http://localhost:3000/api
```
7. To get timezone data from [http://worldtimeapi.org](http://worldtimeapi.org):
```
curl -d '{ "query": "{ getTimezones { data }}" }' -H "Content-Type: application/json" -X POST http://localhost:3000/api
```
8. To get both timezone and continents together:
```
curl -d '{ "query": "{ getTimezones { data } getContinents { data }}" }' -H "Content-Type: application/json" -X POST http://localhost:3000/api
```


