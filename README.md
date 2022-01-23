# Node Manten

## Schema DB

### [----wishes's document----](https://github.com/mamunsyuhada/nodemanten/blob/main/bin/module/wish/entity.js)

```json
{
    "wishId": "69da0078-f376-47e1-a452-6e7125abff83",
    "author": "Imam Syuhada",
    "attendace": ["hadir"],
    "wish": "wish me luck",
    "isDeleted": false,
    "createdAt": {
        "$date": "2022-01-23T09:24:39.271Z"
    },
    "updatedAt": {
        "$date": "2022-01-23T09:24:39.271Z"
    }
}
```

## Run and Test it

You should have mongo running on port 27017 before running tests. You can get mongo up and running by using the following command:

```bash
npm i && npm run dev
```

## TODOs

- [x] Post a wish
- [x] List wishes
- [x] Bruteforce or Ratelimiter
- [ ] Dockerize
- [ ] Create Deployment (Github Action)
- [ ] Test Coverage
