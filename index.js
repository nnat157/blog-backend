const express = require("express")
const {graphqlHTTP} = require("express-graphql")
const mongoose = require("mongoose")
const schema = require("./graphql/schema")
const app = express()

mongoose.connect()


app.use("/graphql", graphqlHTTP({
    graphiql: true,
    schema: schema
}))   




app.listen(8080, () => console.log("app is running on port 8080")) 